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

export interface ISemaphoreInterface extends utils.Interface {
  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "addMembers(uint256,uint256[])": FunctionFragment;
    "createGroup(uint256,uint256,address,uint8)": FunctionFragment;
    "createGroup(uint256,uint256,address,uint8,uint256)": FunctionFragment;
    "decodeRoots(bytes)": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "updateEdge(uint256,uint256,uint32,bytes32)": FunctionFragment;
    "updateGroupAdmin(uint256,address)": FunctionFragment;
    "updateMember(uint256,uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "verifyProof(uint256,bytes32,uint256,uint256,bytes,uint256[8])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMember"
      | "addMembers"
      | "createGroup(uint256,uint256,address,uint8)"
      | "createGroup(uint256,uint256,address,uint8,uint256)"
      | "decodeRoots"
      | "removeMember"
      | "updateEdge"
      | "updateGroupAdmin"
      | "updateMember"
      | "verifyProof"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMember",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup(uint256,uint256,address,uint8)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup(uint256,uint256,address,uint8,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeRoots",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
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
    functionFragment: "updateGroupAdmin",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMember",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGroup(uint256,uint256,address,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup(uint256,uint256,address,uint8,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateEdge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "ProofVerified(uint256,uint256,uint256,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProofVerified"): EventFragment;
}

export interface GroupAdminUpdatedEventObject {
  groupId: BigNumber;
  oldAdmin: string;
  newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  GroupAdminUpdatedEventObject
>;

export type GroupAdminUpdatedEventFilter =
  TypedEventFilter<GroupAdminUpdatedEvent>;

export interface ProofVerifiedEventObject {
  groupId: BigNumber;
  merkleTreeRoot: BigNumber;
  externalNullifier: BigNumber;
  nullifierHash: BigNumber;
  signal: string;
}
export type ProofVerifiedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, string],
  ProofVerifiedEventObject
>;

export type ProofVerifiedEventFilter = TypedEventFilter<ProofVerifiedEvent>;

export interface ISemaphore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreInterface;

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
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createGroup(uint256,uint256,address,uint8)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createGroup(uint256,uint256,address,uint8,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      merkleTreeRootDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decodeRoots(
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { rootsDecoded: string[] }>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEdge(
      groupId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      srcResourceID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      newIdentityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyProof(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMembers(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitments: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createGroup(uint256,uint256,address,uint8)"(
    groupId: PromiseOrValue<BigNumberish>,
    depth: PromiseOrValue<BigNumberish>,
    admin: PromiseOrValue<string>,
    maxEdges: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createGroup(uint256,uint256,address,uint8,uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    depth: PromiseOrValue<BigNumberish>,
    admin: PromiseOrValue<string>,
    maxEdges: PromiseOrValue<BigNumberish>,
    merkleTreeRootDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decodeRoots(
    roots: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  removeMember(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    proofSiblings: PromiseOrValue<BigNumberish>[],
    proofPathIndices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEdge(
    groupId: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BigNumberish>,
    leafIndex: PromiseOrValue<BigNumberish>,
    srcResourceID: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateGroupAdmin(
    groupId: PromiseOrValue<BigNumberish>,
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateMember(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    newIdentityCommitment: PromiseOrValue<BigNumberish>,
    proofSiblings: PromiseOrValue<BigNumberish>[],
    proofPathIndices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyProof(
    groupId: PromiseOrValue<BigNumberish>,
    signal: PromiseOrValue<BytesLike>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    externalNullifier: PromiseOrValue<BigNumberish>,
    roots: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "createGroup(uint256,uint256,address,uint8)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "createGroup(uint256,uint256,address,uint8,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      merkleTreeRootDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    decodeRoots(
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateEdge(
      groupId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      srcResourceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      newIdentityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    verifyProof(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GroupAdminUpdated(uint256,address,address)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): GroupAdminUpdatedEventFilter;
    GroupAdminUpdated(
      groupId?: PromiseOrValue<BigNumberish> | null,
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): GroupAdminUpdatedEventFilter;

    "ProofVerified(uint256,uint256,uint256,uint256,bytes32)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      merkleTreeRoot?: null,
      externalNullifier?: null,
      nullifierHash?: null,
      signal?: null
    ): ProofVerifiedEventFilter;
    ProofVerified(
      groupId?: PromiseOrValue<BigNumberish> | null,
      merkleTreeRoot?: null,
      externalNullifier?: null,
      nullifierHash?: null,
      signal?: null
    ): ProofVerifiedEventFilter;
  };

  estimateGas: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createGroup(uint256,uint256,address,uint8)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createGroup(uint256,uint256,address,uint8,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      merkleTreeRootDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decodeRoots(
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEdge(
      groupId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      srcResourceID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      newIdentityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyProof(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createGroup(uint256,uint256,address,uint8)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createGroup(uint256,uint256,address,uint8,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      maxEdges: PromiseOrValue<BigNumberish>,
      merkleTreeRootDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decodeRoots(
      roots: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEdge(
      groupId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      leafIndex: PromiseOrValue<BigNumberish>,
      srcResourceID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      newIdentityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyProof(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      roots: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
