/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers"
import type { Provider } from "@ethersproject/providers"
import type {
  ISemaphoreVerifier2_2,
  ISemaphoreVerifier2_2Interface
} from "../../../../contracts/interfaces/ISemaphoreVerifier.sol/ISemaphoreVerifier2_2"

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]"
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]"
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]"
      },
      {
        internalType: "uint256[6]",
        name: "input",
        type: "uint256[6]"
      }
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
]

export class ISemaphoreVerifier2_2__factory {
  static readonly abi = _abi
  static createInterface(): ISemaphoreVerifier2_2Interface {
    return new utils.Interface(_abi) as ISemaphoreVerifier2_2Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreVerifier2_2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISemaphoreVerifier2_2
  }
}
