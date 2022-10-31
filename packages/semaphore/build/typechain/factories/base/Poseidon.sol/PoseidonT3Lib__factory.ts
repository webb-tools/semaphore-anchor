/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PoseidonT3Lib,
  PoseidonT3LibInterface,
} from "../../../base/Poseidon.sol/PoseidonT3Lib";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "input",
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
  "0x610291610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806329a5f2f61461003a575b600080fd5b610054600480360381019061004f9190610118565b61006a565b6040516100619190610154565b60405180910390f35b6000919050565b600061008461007f84610194565b61016f565b9050808285602086028201111561009e5761009d610229565b5b60005b858110156100ce57816100b48882610103565b8452602084019350602083019250506001810190506100a1565b5050509392505050565b600082601f8301126100ed576100ec610224565b5b60026100fa848285610071565b91505092915050565b60008135905061011281610244565b92915050565b60006040828403121561012e5761012d61022e565b5b600061013c848285016100d8565b91505092915050565b61014e816101ba565b82525050565b60006020820190506101696000830184610145565b92915050565b600061017961018a565b905061018582826101c4565b919050565b6000604051905090565b600067ffffffffffffffff8211156101af576101ae6101f5565b5b602082029050919050565b6000819050919050565b6101cd82610233565b810181811067ffffffffffffffff821117156101ec576101eb6101f5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61024d816101ba565b811461025857600080fd5b5056fea2646970667358221220182abd306b6279ee313bc92b71008ba46323eae692a71dd817f336c926a2734364736f6c63430008060033";

type PoseidonT3LibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoseidonT3LibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoseidonT3Lib__factory extends ContractFactory {
  constructor(...args: PoseidonT3LibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoseidonT3Lib> {
    return super.deploy(overrides || {}) as Promise<PoseidonT3Lib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoseidonT3Lib {
    return super.attach(address) as PoseidonT3Lib;
  }
  override connect(signer: Signer): PoseidonT3Lib__factory {
    return super.connect(signer) as PoseidonT3Lib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonT3LibInterface {
    return new utils.Interface(_abi) as PoseidonT3LibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT3Lib {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT3Lib;
  }
}