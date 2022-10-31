import { expect } from "chai"
import { run } from "hardhat"
import { Signer, utils } from "ethers"
import { Identity } from "@webb-tools/semaphore-identity"
import { LinkedGroup } from "@webb-tools/semaphore-group"
import {
  generateNullifierHash,
  generateProof,
  packToSolidityProof,
  PublicSignals,
  SolidityProof
} from "@webb-tools/semaphore-proof"
import { VerifierContractInfo, createRootsBytes } from "../utils"
import { SemaphoreVoting } from "../../build/typechain"

const path = require("path")

describe("SemaphoreVoting", () => {
  let contract: SemaphoreVoting
  let signers: Signer[]
  let coordinator: string

  const zeroValue = BigInt(
    "21663839004416932945382355908790599225266501822907911457504978515578255421292"
  )
  const chainID = BigInt(1099511629113)
  const treeDepth = Number(process.env.TREE_DEPTH) | 20
  const pollIds = [BigInt(1), BigInt(2), BigInt(3)]
  const encryptionKey = BigInt(0)
  const decryptionKey = BigInt(0)
  const maxEdges = 1

  const wasmFilePath = path.join(
    __dirname,
    `/../../solidity-fixtures/solidity-fixtures/${treeDepth}/2/semaphore_20_2.wasm`
  )
  const zkeyFilePath = path.join(
    __dirname,
    `/../../solidity-fixtures/solidity-fixtures/${treeDepth}/2/circuit_final.zkey`
  )

  before(async () => {
    const { address: v2Address } = await run("deploy:verifier", {
      logs: false,
      depth: treeDepth,
      circuitLength: 2
    })
    const VerifierV1: VerifierContractInfo = {
      name: `Verifier${treeDepth}_${2}`,
      address: v2Address,
      depth: `${treeDepth}`,
      circuitLength: `2`
    }

    const { address: v8Address } = await run("deploy:verifier", {
      logs: false,
      depth: treeDepth,
      circuitLength: 8
    })
    const VerifierV8: VerifierContractInfo = {
      name: `Verifier${treeDepth}_${8}`,
      address: v8Address,
      depth: `${treeDepth}`,
      circuitLength: `8`
    }

    const deployedVerifiers: Map<string, VerifierContractInfo> = new Map([
      ["v2", VerifierV1],
      ["v8", VerifierV8]
    ])
    // console.log(deployedVerifiers)

    const verifierSelector = await run("deploy:verifier-selector", {
      logs: true,
      verifiers: deployedVerifiers
    })
    // console.log('here')
    // console.log(verifierSelector)
    contract = await run("deploy:semaphore-voting", {
      logs: true,
      verifier: verifierSelector.address
    })
    signers = await run("accounts", { logs: false })
    coordinator = await signers[1].getAddress()
  })

  describe("# createPoll", () => {
    it("Should not create a poll with a wrong depth", async () => {
      const transaction = contract.createPoll(
        pollIds[0],
        10,
        coordinator,
        maxEdges
      )

      await expect(transaction).revertedWith(
        "Semaphore__MerkleTreeDepthIsNotSupported()"
      )
    })

    it("Should not create a poll greater than the snark scalar field", async () => {
      const transaction = contract.createPoll(
        BigInt(
          "21888242871839275222246405745257275088548364400416034343698204186575808495618"
        ),
        treeDepth,
        coordinator,
        maxEdges
      )

      await expect(transaction).revertedWith(
        "Semaphore__GroupIdIsNotLessThanSnarkScalarField()"
      )
    })

    it("Should create a poll", async () => {
      const transaction = contract.createPoll(
        pollIds[0],
        treeDepth,
        coordinator,
        maxEdges
      )

      await expect(transaction)
        .emit(contract, "PollCreated")
        .withArgs(pollIds[0], coordinator)
    })

    it("Should not create a poll if it already exists", async () => {
      const transaction = contract.createPoll(
        pollIds[0],
        treeDepth,
        coordinator,
        maxEdges
      )

      await expect(transaction).revertedWith("Semaphore__GroupAlreadyExists()")
    })
  })

  describe("# startPoll", () => {
    it("Should not start the poll if the caller is not the coordinator", async () => {
      const transaction = contract.startPoll(pollIds[0], encryptionKey)

      await expect(transaction).revertedWith(
        "Semaphore__CallerIsNotThePollCoordinator()"
      )
    })

    it("Should start the poll", async () => {
      const transaction = contract
        .connect(signers[1])
        .startPoll(pollIds[0], encryptionKey)

      await expect(transaction)
        .emit(contract, "PollStarted")
        .withArgs(pollIds[0], coordinator, encryptionKey)
    })

    it("Should not start a poll if it has already been started", async () => {
      const transaction = contract
        .connect(signers[1])
        .startPoll(pollIds[0], encryptionKey)

      await expect(transaction).revertedWith(
        "emaphore__PollHasAlreadyBeenStarted()"
      )
    })
  })

  describe("# addVoter", () => {
    before(async () => {
      await contract.createPoll(pollIds[1], treeDepth, coordinator, maxEdges)
    })

    it("Should not add a voter if the caller is not the coordinator", async () => {
      const identity = new Identity()
      const identityCommitment = identity.generateCommitment()

      const transaction = contract.addVoter(pollIds[0], identityCommitment)

      await expect(transaction).revertedWith(
        "Semaphore__CallerIsNotThePollCoordinator()"
      )
    })

    it("Should not add a voter if the poll has already been started", async () => {
      const identity = new Identity()
      const identityCommitment = identity.generateCommitment()

      const transaction = contract
        .connect(signers[1])
        .addVoter(pollIds[0], identityCommitment)

      await expect(transaction).revertedWith(
        "Semaphore__PollHasAlreadyBeenStarted()"
      )
    })

    it("Should add a voter to an existing poll", async () => {
      const identity = new Identity("test")
      const identityCommitment = identity.generateCommitment()

      const group = new LinkedGroup(treeDepth, maxEdges, zeroValue)
      group.addMember(identityCommitment)

      const transaction = contract
        .connect(signers[1])
        .addVoter(pollIds[1], identityCommitment)

      await expect(transaction).emit(contract, "MemberAdded").withArgs(
        pollIds[1],
        0,
        identityCommitment,
        group.root
        // "7943806797233700547041913393384710769504872928213070894800658208056456315893"
      )
    })

    it("Should return the correct number of poll voters", async () => {
      const size = await contract.getNumberOfMerkleTreeLeaves(pollIds[1])

      expect(size).eq(1)
    })
  })

  describe("# castVote", () => {
    const identity = new Identity("test")
    const identityCommitment = identity.generateCommitment()
    const vote = "1"
    const bytes32Vote = utils.formatBytes32String(vote)

    const group = new LinkedGroup(treeDepth, maxEdges, zeroValue)

    group.addMember(identityCommitment)
    group.addMember(BigInt(1))

    let solidityProof: SolidityProof
    let publicSignals: PublicSignals

    before(async () => {
      await contract.connect(signers[1]).addVoter(pollIds[1], BigInt(1))
      await contract.connect(signers[1]).startPoll(pollIds[1], encryptionKey)
      await contract.createPoll(pollIds[2], treeDepth, coordinator, maxEdges)

      const fullProof = await generateProof(
        identity,
        group,
        BigInt(pollIds[1]),
        vote,
        chainID,
        {
          wasmFilePath,
          zkeyFilePath
        }
      )

      publicSignals = fullProof.publicSignals
      solidityProof = packToSolidityProof(fullProof.proof)
    })

    it("Should not cast a vote if the caller is not the coordinator", async () => {
      const transaction = contract.castVote(
        bytes32Vote,
        publicSignals.nullifierHash,
        pollIds[0],
        createRootsBytes(publicSignals.roots),
        solidityProof
      )

      await expect(transaction).revertedWith(
        "emaphore__CallerIsNotThePollCoordinator()"
      )
    })

    it("Should not cast a vote if the poll is not ongoing", async () => {
      const transaction = contract
        .connect(signers[1])
        .castVote(
          bytes32Vote,
          publicSignals.nullifierHash,
          pollIds[2],
          createRootsBytes(publicSignals.roots),
          solidityProof
        )

      await expect(transaction).revertedWith("Semaphore__PollIsNotOngoing()")
    })

    it("Should not cast a vote if the proof is not valid", async () => {
      const nullifierHash = generateNullifierHash(
        pollIds[0],
        identity.nullifier
      )

      const transaction = contract
        .connect(signers[1])
        .castVote(
          bytes32Vote,
          nullifierHash,
          pollIds[1],
          createRootsBytes(publicSignals.roots),
          solidityProof
        )

      await expect(transaction).revertedWith("invalidProof")
    })

    it("Should cast a vote", async () => {
      const transaction = contract
        .connect(signers[1])
        .castVote(
          bytes32Vote,
          publicSignals.nullifierHash,
          pollIds[1],
          createRootsBytes(publicSignals.roots),
          solidityProof
        )

      await expect(transaction)
        .emit(contract, "VoteAdded")
        .withArgs(pollIds[1], bytes32Vote)
    })

    it("Should not cast a vote twice", async () => {
      const transaction = contract
        .connect(signers[1])
        .castVote(
          bytes32Vote,
          publicSignals.nullifierHash,
          pollIds[1],
          createRootsBytes(publicSignals.roots),
          solidityProof
        )

      await expect(transaction).revertedWith(
        "Semaphore__YouAreUsingTheSameNillifierTwice()"
      )
    })
  })

  describe("# endPoll", () => {
    it("Should not end the poll if the caller is not the coordinator", async () => {
      const transaction = contract.endPoll(pollIds[1], decryptionKey)

      await expect(transaction).revertedWith(
        "Semaphore__CallerIsNotThePollCoordinator()"
      )
    })

    it("Should end the poll", async () => {
      const transaction = contract
        .connect(signers[1])
        .endPoll(pollIds[1], encryptionKey)

      await expect(transaction)
        .emit(contract, "PollEnded")
        .withArgs(pollIds[1], coordinator, decryptionKey)
    })

    it("Should not end a poll if it has already been ended", async () => {
      const transaction = contract
        .connect(signers[1])
        .endPoll(pollIds[1], encryptionKey)

      await expect(transaction).revertedWith("Semaphore__PollIsNotOngoing()")
    })
  })
})