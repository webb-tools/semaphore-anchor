/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type EdgeStruct = {
  chainID: PromiseOrValue<BigNumberish>;
  root: PromiseOrValue<BigNumberish>;
  latestLeafIndex: PromiseOrValue<BigNumberish>;
  srcResourceID: PromiseOrValue<BytesLike>;
};

export type EdgeStructOutput = [BigNumber, BigNumber, BigNumber, string] & {
  chainID: BigNumber;
  root: BigNumber;
  latestLeafIndex: BigNumber;
  srcResourceID: string;
};

export declare namespace ISemaphoreVoting {
  export type VerifierStruct = {
    contractAddress: PromiseOrValue<string>;
    merkleTreeDepth: PromiseOrValue<BigNumberish>;
  };

  export type VerifierStructOutput = [string, BigNumber] & {
    contractAddress: string;
    merkleTreeDepth: BigNumber;
  };
}

export interface SemaphoreVotingInterface extends utils.Interface {
  functions: {
    "addVoter(uint256,uint256)": FunctionFragment;
    "castVote(bytes32,uint256,uint256,bytes,uint256[8])": FunctionFragment;
    "createPoll(uint256,uint256,address,uint8)": FunctionFragment;
    "endPoll(uint256,uint256)": FunctionFragment;
    "getLatestNeighborEdges(uint256)": FunctionFragment;
    "getMaxEdges(uint256)": FunctionFragment;
    "getMerkleTreeDepth(uint256)": FunctionFragment;
    "getMerkleTreeRoot(uint256)": FunctionFragment;
    "getNumberOfMerkleTreeLeaves(uint256)": FunctionFragment;
    "startPoll(uint256,uint256)": FunctionFragment;
    "updateEdge(uint256,uint256,uint32,bytes32)": FunctionFragment;
    "verifyRoots(uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addVoter"
      | "castVote"
      | "createPoll"
      | "endPoll"
      | "getLatestNeighborEdges"
      | "getMaxEdges"
      | "getMerkleTreeDepth"
      | "getMerkleTreeRoot"
      | "getNumberOfMerkleTreeLeaves"
      | "startPoll"
      | "updateEdge"
      | "verifyRoots"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addVoter",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createPoll",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "endPoll",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestNeighborEdges",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxEdges",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMerkleTreeDepth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMerkleTreeRoot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfMerkleTreeLeaves",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startPoll",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEdge",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyRoots",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "addVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endPoll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLatestNeighborEdges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxEdges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMerkleTreeDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMerkleTreeRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfMerkleTreeLeaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateEdge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyRoots",
    data: BytesLike
  ): Result;

  events: {
    "GroupCreated(uint256,uint256,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256,uint256)": EventFragment;
    "MemberUpdated(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "NullifierHashAdded(uint256)": EventFragment;
    "PollCreated(uint256,address)": EventFragment;
    "PollEnded(uint256,address,uint256)": EventFragment;
    "PollStarted(uint256,address,uint256)": EventFragment;
    "VoteAdded(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NullifierHashAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PollCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PollEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PollStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteAdded"): EventFragment;
}

export interface GroupCreatedEventObject {
  groupId: BigNumber;
  merkleTreeDepth: BigNumber;
  merkleTreeRoot: BigNumber;
}
export type GroupCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  GroupCreatedEventObject
>;

export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;

export interface MemberAddedEventObject {
  groupId: BigNumber;
  index: BigNumber;
  identityCommitment: BigNumber;
  merkleTreeRoot: BigNumber;
}
export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  MemberAddedEventObject
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export interface MemberRemovedEventObject {
  groupId: BigNumber;
  index: BigNumber;
  identityCommitment: BigNumber;
  merkleTreeRoot: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  MemberRemovedEventObject
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

export interface MemberUpdatedEventObject {
  groupId: BigNumber;
  index: BigNumber;
  identityCommitment: BigNumber;
  newIdentityCommitment: BigNumber;
  merkleTreeRoot: BigNumber;
}
export type MemberUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  MemberUpdatedEventObject
>;

export type MemberUpdatedEventFilter = TypedEventFilter<MemberUpdatedEvent>;

export interface NullifierHashAddedEventObject {
  nullifierHash: BigNumber;
}
export type NullifierHashAddedEvent = TypedEvent<
  [BigNumber],
  NullifierHashAddedEventObject
>;

export type NullifierHashAddedEventFilter =
  TypedEventFilter<NullifierHashAddedEvent>;

export interface PollCreatedEventObject {
  pollId: BigNumber;
  coordinator: string;
}
export type PollCreatedEvent = TypedEvent<
  [BigNumber, string],
  PollCreatedEventObject
>;

export type PollCreatedEventFilter = TypedEventFilter<PollCreatedEvent>;

export interface PollEndedEventObject {
  pollId: BigNumber;
  coordinator: string;
  decryptionKey: BigNumber;
}
export type PollEndedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  PollEndedEventObject
>;

export type PollEndedEventFilter = TypedEventFilter<PollEndedEvent>;

export interface PollStartedEventObject {
  pollId: BigNumber;
  coordinator: string;
  encryptionKey: BigNumber;
}
export type PollStartedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  PollStartedEventObject
>;

export type PollStartedEventFilter = TypedEventFilter<PollStartedEvent>;

export interface VoteAddedEventObject {
  pollId: BigNumber;
  vote: string;
}
export type VoteAddedEvent = TypedEvent<
  [BigNumber, string],
  VoteAddedEventObject
>;

export type VoteAddedEventFilter = TypedEventFilter<VoteAddedEvent>;

export interface SemaphoreVoting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreVotingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addVoter(
      pollId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    castVote(
      vote: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      pollId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createPoll(
      pollId: PromiseOrValue<BigNumberish>,
      merkleTreeDepth: PromiseOrValue<BigNumberish>,
      coordinator: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endPoll(
      pollId: PromiseOrValue<BigNumberish>,
      decryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLatestNeighborEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[EdgeStructOutput[]]>;

    getMaxEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMerkleTreeDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMerkleTreeRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumberOfMerkleTreeLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    startPoll(
      pollId: PromiseOrValue<BigNumberish>,
      encryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEdge(
      pollId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      typedChainId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyRoots(
      groupId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addVoter(
    pollId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  castVote(
    vote: PromiseOrValue<BytesLike>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    pollId: PromiseOrValue<BigNumberish>,
    roots: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createPoll(
    pollId: PromiseOrValue<BigNumberish>,
    merkleTreeDepth: PromiseOrValue<BigNumberish>,
    coordinator: PromiseOrValue<string>,
    maxEdges: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endPoll(
    pollId: PromiseOrValue<BigNumberish>,
    decryptionKey: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLatestNeighborEdges(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<EdgeStructOutput[]>;

  getMaxEdges(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getMerkleTreeDepth(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMerkleTreeRoot(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumberOfMerkleTreeLeaves(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  startPoll(
    pollId: PromiseOrValue<BigNumberish>,
    encryptionKey: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEdge(
    pollId: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BigNumberish>,
    leafIndex: PromiseOrValue<BigNumberish>,
    typedChainId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyRoots(
    groupId: PromiseOrValue<BigNumberish>,
    roots: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addVoter(
      pollId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    castVote(
      vote: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      pollId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    createPoll(
      pollId: PromiseOrValue<BigNumberish>,
      merkleTreeDepth: PromiseOrValue<BigNumberish>,
      coordinator: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endPoll(
      pollId: PromiseOrValue<BigNumberish>,
      decryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getLatestNeighborEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<EdgeStructOutput[]>;

    getMaxEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getMerkleTreeDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMerkleTreeRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfMerkleTreeLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startPoll(
      pollId: PromiseOrValue<BigNumberish>,
      encryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEdge(
      pollId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      typedChainId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyRoots(
      groupId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "GroupCreated(uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      merkleTreeDepth?: null,
      merkleTreeRoot?: null
    ): GroupCreatedEventFilter;
    GroupCreated(
      groupId?: PromiseOrValue<BigNumberish> | null,
      merkleTreeDepth?: null,
      merkleTreeRoot?: null
    ): GroupCreatedEventFilter;

    "MemberAdded(uint256,uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberAddedEventFilter;

    "MemberRemoved(uint256,uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberRemovedEventFilter;

    "MemberUpdated(uint256,uint256,uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      newIdentityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberUpdatedEventFilter;
    MemberUpdated(
      groupId?: PromiseOrValue<BigNumberish> | null,
      index?: null,
      identityCommitment?: null,
      newIdentityCommitment?: null,
      merkleTreeRoot?: null
    ): MemberUpdatedEventFilter;

    "NullifierHashAdded(uint256)"(
      nullifierHash?: null
    ): NullifierHashAddedEventFilter;
    NullifierHashAdded(nullifierHash?: null): NullifierHashAddedEventFilter;

    "PollCreated(uint256,address)"(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null
    ): PollCreatedEventFilter;
    PollCreated(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null
    ): PollCreatedEventFilter;

    "PollEnded(uint256,address,uint256)"(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null,
      decryptionKey?: null
    ): PollEndedEventFilter;
    PollEnded(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null,
      decryptionKey?: null
    ): PollEndedEventFilter;

    "PollStarted(uint256,address,uint256)"(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null,
      encryptionKey?: null
    ): PollStartedEventFilter;
    PollStarted(
      pollId?: null,
      coordinator?: PromiseOrValue<string> | null,
      encryptionKey?: null
    ): PollStartedEventFilter;

    "VoteAdded(uint256,bytes32)"(
      pollId?: PromiseOrValue<BigNumberish> | null,
      vote?: null
    ): VoteAddedEventFilter;
    VoteAdded(
      pollId?: PromiseOrValue<BigNumberish> | null,
      vote?: null
    ): VoteAddedEventFilter;
  };

  estimateGas: {
    addVoter(
      pollId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    castVote(
      vote: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      pollId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createPoll(
      pollId: PromiseOrValue<BigNumberish>,
      merkleTreeDepth: PromiseOrValue<BigNumberish>,
      coordinator: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endPoll(
      pollId: PromiseOrValue<BigNumberish>,
      decryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLatestNeighborEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMerkleTreeDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMerkleTreeRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfMerkleTreeLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startPoll(
      pollId: PromiseOrValue<BigNumberish>,
      encryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEdge(
      pollId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      typedChainId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyRoots(
      groupId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVoter(
      pollId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      vote: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      pollId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createPoll(
      pollId: PromiseOrValue<BigNumberish>,
      merkleTreeDepth: PromiseOrValue<BigNumberish>,
      coordinator: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endPoll(
      pollId: PromiseOrValue<BigNumberish>,
      decryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLatestNeighborEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxEdges(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMerkleTreeDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMerkleTreeRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfMerkleTreeLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startPoll(
      pollId: PromiseOrValue<BigNumberish>,
      encryptionKey: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEdge(
      pollId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      typedChainId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyRoots(
      groupId: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
