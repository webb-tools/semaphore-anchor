/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers"
import type { Provider } from "@ethersproject/providers"
import type {
  ISemaphoreNullifiers,
  ISemaphoreNullifiersInterface
} from "../../../contracts/interfaces/ISemaphoreNullifiers"

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "externalNullifier",
        type: "uint256"
      }
    ],
    name: "ExternalNullifierAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "externalNullifier",
        type: "uint256"
      }
    ],
    name: "ExternalNullifierRemoved",
    type: "event"
  }
]

export class ISemaphoreNullifiers__factory {
  static readonly abi = _abi
  static createInterface(): ISemaphoreNullifiersInterface {
    return new utils.Interface(_abi) as ISemaphoreNullifiersInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreNullifiers {
    return new Contract(address, _abi, signerOrProvider) as ISemaphoreNullifiers
  }
}
