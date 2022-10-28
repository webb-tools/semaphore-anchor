/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISemaphoreCore,
  ISemaphoreCoreInterface,
} from "../../interfaces/ISemaphoreCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
];

export class ISemaphoreCore__factory {
  static readonly abi = _abi;
  static createInterface(): ISemaphoreCoreInterface {
    return new utils.Interface(_abi) as ISemaphoreCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreCore {
    return new Contract(address, _abi, signerOrProvider) as ISemaphoreCore;
  }
}
