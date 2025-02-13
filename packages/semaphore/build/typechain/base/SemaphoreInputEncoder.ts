/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace SemaphoreInputEncoder {
  export type ProofStruct = {
    proof: PromiseOrValue<BigNumberish>[];
    nullifierHash: PromiseOrValue<BigNumberish>;
    signalHash: PromiseOrValue<BigNumberish>;
    externalNullifier: PromiseOrValue<BigNumberish>;
    roots: PromiseOrValue<BytesLike>;
  };

  export type ProofStructOutput = [
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    proof: BigNumber[];
    nullifierHash: BigNumber;
    signalHash: BigNumber;
    externalNullifier: BigNumber;
    roots: string;
  };
}

export interface SemaphoreInputEncoderInterface extends utils.Interface {
  functions: {
    "EVM_CHAIN_ID_TYPE()": FunctionFragment;
    "_encodeInputs((uint256[8],uint256,uint256,uint256,bytes),uint8)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdType()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EVM_CHAIN_ID_TYPE"
      | "_encodeInputs"
      | "getChainId"
      | "getChainIdType"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_encodeInputs",
    values: [SemaphoreInputEncoder.ProofStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdType",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_encodeInputs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdType",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SemaphoreInputEncoder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreInputEncoderInterface;

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
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<[string]>;

    _encodeInputs(
      _args: SemaphoreInputEncoder.ProofStruct,
      _maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string[]]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChainIdType(overrides?: CallOverrides): Promise<[number]>;
  };

  EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

  _encodeInputs(
    _args: SemaphoreInputEncoder.ProofStruct,
    _maxEdges: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, string[]]>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdType(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

    _encodeInputs(
      _args: SemaphoreInputEncoder.ProofStruct,
      _maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string[]]>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    _encodeInputs(
      _args: SemaphoreInputEncoder.ProofStruct,
      _maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _encodeInputs(
      _args: SemaphoreInputEncoder.ProofStruct,
      _maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainIdType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
