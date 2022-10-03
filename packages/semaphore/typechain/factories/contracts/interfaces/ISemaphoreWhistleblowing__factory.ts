/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers"
import type { Provider } from "@ethersproject/providers"
import type {
  ISemaphoreWhistleblowing,
  ISemaphoreWhistleblowingInterface
} from "../../../contracts/interfaces/ISemaphoreWhistleblowing"

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "maxEdges",
            type: "uint8"
          }
        ],
        indexed: false,
        internalType: "struct ISemaphoreWhistleblowing.Entity",
        name: "entity",
        type: "tuple"
      },
      {
        indexed: true,
        internalType: "address",
        name: "editor",
        type: "address"
      }
    ],
    name: "EntityCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "leak",
        type: "bytes32"
      }
    ],
    name: "LeakPublished",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256"
      }
    ],
    name: "addWhistleblower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "depth",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "editor",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "maxEdges",
        type: "uint8"
      }
    ],
    name: "createEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leak",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "roots",
        type: "bytes"
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]"
      }
    ],
    name: "publishLeak",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "proofSiblings",
        type: "uint256[]"
      },
      {
        internalType: "uint8[]",
        name: "proofPathIndices",
        type: "uint8[]"
      }
    ],
    name: "removeWhistleblower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
]

export class ISemaphoreWhistleblowing__factory {
  static readonly abi = _abi
  static createInterface(): ISemaphoreWhistleblowingInterface {
    return new utils.Interface(_abi) as ISemaphoreWhistleblowingInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemaphoreWhistleblowing {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISemaphoreWhistleblowing
  }
}
