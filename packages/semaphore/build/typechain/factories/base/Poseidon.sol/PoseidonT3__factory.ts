/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PoseidonT3,
  PoseidonT3Interface,
} from "../../../base/Poseidon.sol/PoseidonT3";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610287806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806329a5f2f614610030575b600080fd5b61004a6004803603810190610045919061010e565b610060565b604051610057919061014a565b60405180910390f35b6000919050565b600061007a6100758461018a565b610165565b905080828560208602820111156100945761009361021f565b5b60005b858110156100c457816100aa88826100f9565b845260208401935060208301925050600181019050610097565b5050509392505050565b600082601f8301126100e3576100e261021a565b5b60026100f0848285610067565b91505092915050565b6000813590506101088161023a565b92915050565b60006040828403121561012457610123610224565b5b6000610132848285016100ce565b91505092915050565b610144816101b0565b82525050565b600060208201905061015f600083018461013b565b92915050565b600061016f610180565b905061017b82826101ba565b919050565b6000604051905090565b600067ffffffffffffffff8211156101a5576101a46101eb565b5b602082029050919050565b6000819050919050565b6101c382610229565b810181811067ffffffffffffffff821117156101e2576101e16101eb565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610243816101b0565b811461024e57600080fd5b5056fea264697066735822122074adb8931957ca1bda2ea82f74d705eb28038ac6b482fb130219fcaa658aa24864736f6c63430008060033";

type PoseidonT3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoseidonT3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoseidonT3__factory extends ContractFactory {
  constructor(...args: PoseidonT3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoseidonT3> {
    return super.deploy(overrides || {}) as Promise<PoseidonT3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoseidonT3 {
    return super.attach(address) as PoseidonT3;
  }
  override connect(signer: Signer): PoseidonT3__factory {
    return super.connect(signer) as PoseidonT3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonT3Interface {
    return new utils.Interface(_abi) as PoseidonT3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT3 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT3;
  }
}