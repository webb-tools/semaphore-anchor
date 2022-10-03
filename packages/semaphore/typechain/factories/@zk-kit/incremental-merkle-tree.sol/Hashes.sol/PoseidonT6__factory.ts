/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers"
import type { Provider, TransactionRequest } from "@ethersproject/providers"
import type { PromiseOrValue } from "../../../../common"
import type {
  PoseidonT6,
  PoseidonT6Interface
} from "../../../../@zk-kit/incremental-merkle-tree.sol/Hashes.sol/PoseidonT6"

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "",
        type: "uint256[5]"
      }
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
]

const _bytecode =
  "0x610291610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80634937a2581461003a575b600080fd5b610054600480360381019061004f9190610118565b61006a565b6040516100619190610154565b60405180910390f35b6000919050565b600061008461007f84610194565b61016f565b9050808285602086028201111561009e5761009d610229565b5b60005b858110156100ce57816100b48882610103565b8452602084019350602083019250506001810190506100a1565b5050509392505050565b600082601f8301126100ed576100ec610224565b5b60056100fa848285610071565b91505092915050565b60008135905061011281610244565b92915050565b600060a0828403121561012e5761012d61022e565b5b600061013c848285016100d8565b91505092915050565b61014e816101ba565b82525050565b60006020820190506101696000830184610145565b92915050565b600061017961018a565b905061018582826101c4565b919050565b6000604051905090565b600067ffffffffffffffff8211156101af576101ae6101f5565b5b602082029050919050565b6000819050919050565b6101cd82610233565b810181811067ffffffffffffffff821117156101ec576101eb6101f5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61024d816101ba565b811461025857600080fd5b5056fea26469706673582212200a74f02e9e050d615d55aad32d881e5eb1f35769441580e6b7d282e08061e26764736f6c63430008050033"

type PoseidonT6ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: PoseidonT6ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class PoseidonT6__factory extends ContractFactory {
  constructor(...args: PoseidonT6ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoseidonT6> {
    return super.deploy(overrides || {}) as Promise<PoseidonT6>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): PoseidonT6 {
    return super.attach(address) as PoseidonT6
  }
  override connect(signer: Signer): PoseidonT6__factory {
    return super.connect(signer) as PoseidonT6__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): PoseidonT6Interface {
    return new utils.Interface(_abi) as PoseidonT6Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT6 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT6
  }
}
