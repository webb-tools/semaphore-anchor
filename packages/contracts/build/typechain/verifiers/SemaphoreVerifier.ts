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

export interface SemaphoreVerifierInterface extends utils.Interface {
  functions: {
    "v2_2()": FunctionFragment;
    "v8_2()": FunctionFragment;
    "verifyProof(uint256[2],uint256[2][2],uint256[2],bytes,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "v2_2" | "v8_2" | "verifyProof"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "v2_2", values?: undefined): string;
  encodeFunctionData(functionFragment: "v8_2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "v2_2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "v8_2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SemaphoreVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreVerifierInterface;

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
    v2_2(overrides?: CallOverrides): Promise<[string]>;

    v8_2(overrides?: CallOverrides): Promise<[string]>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: PromiseOrValue<BytesLike>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  v2_2(overrides?: CallOverrides): Promise<string>;

  v8_2(overrides?: CallOverrides): Promise<string>;

  verifyProof(
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    input: PromiseOrValue<BytesLike>,
    maxEdges: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    v2_2(overrides?: CallOverrides): Promise<string>;

    v8_2(overrides?: CallOverrides): Promise<string>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: PromiseOrValue<BytesLike>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    v2_2(overrides?: CallOverrides): Promise<BigNumber>;

    v8_2(overrides?: CallOverrides): Promise<BigNumber>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: PromiseOrValue<BytesLike>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    v2_2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    v8_2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: PromiseOrValue<BytesLike>,
      maxEdges: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
