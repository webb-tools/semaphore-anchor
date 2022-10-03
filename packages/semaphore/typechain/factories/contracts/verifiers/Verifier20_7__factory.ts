/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers"
import type { Provider, TransactionRequest } from "@ethersproject/providers"
import type { PromiseOrValue } from "../../../common"
import type {
  Verifier20_7,
  Verifier20_7Interface
} from "../../../contracts/verifiers/Verifier20_7"

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
        internalType: "uint256[11]",
        name: "input",
        type: "uint256[11]"
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f38806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b9c6ea8714610030575b600080fd5b61004a600480360381019061004591906118a7565b610060565b60405161005791906119f1565b60405180910390f35b600061006a61159a565b60405180604001604052808760006002811061008957610088611d77565b5b60200201518152602001876001600281106100a7576100a6611d77565b5b6020020151815250816000018190525060405180604001604052806040518060400160405280886000600281106100e1576100e0611d77565b5b60200201516000600281106100f9576100f8611d77565b5b602002015181526020018860006002811061011757610116611d77565b5b602002015160016002811061012f5761012e611d77565b5b6020020151815250815260200160405180604001604052808860016002811061015b5761015a611d77565b5b602002015160006002811061017357610172611d77565b5b602002015181526020018860016002811061019157610190611d77565b5b60200201516001600281106101a9576101a8611d77565b5b602002015181525081525081602001819052506040518060400160405280856000600281106101db576101da611d77565b5b60200201518152602001856001600281106101f9576101f8611d77565b5b602002015181525081604001819052506000600b67ffffffffffffffff81111561022657610225611da6565b5b6040519080825280602002602001820160405280156102545781602001602082028036833780820191505090505b50905060005b600b8110156102ad578481600b811061027657610275611d77565b5b602002015182828151811061028e5761028d611d77565b5b60200260200101818152505080806102a590611c9f565b91505061025a565b5060006102ba82846102da565b14156102cb576001925050506102d2565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000019050600061030a6104cd565b9050806080015151600186516103209190611b74565b14610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035790611a0c565b60405180910390fd5b60006040518060400160405280600081526020016000815250905060005b865181101561044f578387828151811061039b5761039a611d77565b5b6020026020010151106103e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103da90611a4c565b60405180910390fd5b61043a8261043585608001516001856103fc9190611b74565b8151811061040d5761040c611d77565b5b60200260200101518a858151811061042857610427611d77565b5b6020026020010151610d81565b610e5e565b9150808061044790611c9f565b91505061037e565b5061047981836080015160008151811061046c5761046b611d77565b5b6020026020010151610e5e565b90506104af61048b8660000151610f61565b8660200151846000015185602001518587604001518b604001518960600151611006565b6104bf57600193505050506104c7565b600093505050505b92915050565b6104d56115cd565b60405180604001604052807f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281526020017f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19268152508160000181905250604051806040016040528060405180604001604052807f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c81526020017f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab815250815260200160405180604001604052807f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781526020017f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec88152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f0d4f8b26dfe06be6028ef0af2b71467e3e5edacc841cb4fd774645f46e0b733081526020017f2fb5687d99636c29b6c27f73231020c98fbf9fce1bf08885e670afde43469f0d815250815260200160405180604001604052807f0ba06593a442e87bf1d21c249b5e758d60c5248e956aa74139b9d7e707c4048981526020017f1258730b8025cd599e7e1919cc5707ba69699b4783d1e0daf9fc1ee06ab5c65f8152508152508160600181905250600c67ffffffffffffffff81111561079c5761079b611da6565b5b6040519080825280602002602001820160405280156107d557816020015b6107c2611614565b8152602001906001900390816107ba5790505b50816080018190525060405180604001604052807f0b9ae674bce9b1d7e15c12f4216af3a876b112b67f85a30216bce0d6d9386f0881526020017f261ef39b5e5ba5324d65e2bd452bcef92dbd3cb4671ecfddd8d50b3e0bf75ebb815250816080015160008151811061084b5761084a611d77565b5b602002602001018190525060405180604001604052807f1fe2bf7341e927e1b0e21748408ec22fc49ee5539adb54cd9f501abf5a6dada681526020017f0502bf217a8ae388d9c9636a34b45a144e8d336394a7457e35ac9d79780fa35281525081608001516001815181106108c3576108c2611d77565b5b602002602001018190525060405180604001604052807f08f9b38961412b58e3179ee78bf86ea0a32dc24153b229550866877a90bf981281526020017f20a8ad91e632b761f71c9284ae5ec0cd333da78d9ca7453f06f9f22c916493d7815250816080015160028151811061093b5761093a611d77565b5b602002602001018190525060405180604001604052807f06188e056a704d5ffe4c91e41a3fa1d98ddf300b03dc4dabf905daeb9ded624e81526020017f1437251accb9f1a8c689bf33d80c65abc5df043ec7aa0696c1ad73f9e733b15881525081608001516003815181106109b3576109b2611d77565b5b602002602001018190525060405180604001604052807f2473ede0bb56dbeffb4c61320a15533a4c353a4597c72416743e0bf881aa14f081526020017f249a2c0cc2f9f4a01f1dc20b6b729689e1d62a4029ab1e1357f026443c8a745b8152508160800151600481518110610a2b57610a2a611d77565b5b602002602001018190525060405180604001604052807f1445f7d2920b8d9aab988fa7a690c895735a770d0fbe55c8cbecb63e4831cff481526020017f1eae3a155afbbd56ffdfed223493a4e75281dca4248def48d00a7dd1d27d96068152508160800151600581518110610aa357610aa2611d77565b5b602002602001018190525060405180604001604052807f1d4399be13d0272da196aa88ea6728cdf2949c007d188249c2fa1925036cb98381526020017f0aa42de94b4fda73592cf66c82f6655ab7ea50c12eb46b7baef80fe9c0506e928152508160800151600681518110610b1b57610b1a611d77565b5b602002602001018190525060405180604001604052807f1b30a5d7df4ec55fa8f3d54a4c98b724623eaab1acf02a136f74fef2c7352f6681526020017f1c2139092573b19d86c1e97fe9d6d04182846883ff313c7afa386e085f7c09fc8152508160800151600781518110610b9357610b92611d77565b5b602002602001018190525060405180604001604052807f1ec398c71ca7b5356ceadd7cd738ef26f85932db3b37979b3388178d20835bd581526020017f013573e9f4d379ecae1943769fb8db0ffb7340ef6a9c09daca0db9a2aefcc9fc8152508160800151600881518110610c0b57610c0a611d77565b5b602002602001018190525060405180604001604052807f15fcc2edb9978acc839d3807e561b46a27ff1bff79464f41fcbd5f4104964c4881526020017f137d213882dd3ffddbbc1ee866aff87bf0b6538ee4b868be5317f9372066df7f8152508160800151600981518110610c8357610c82611d77565b5b602002602001018190525060405180604001604052807f1cf84c7444d07d5bc0b8454596fefea509f6216198212b957544d53f2cb275d781526020017f159a0c4ac4d807e453d1ce2cb59a43474e87505b8ec0e2dbec73bc2b1da3f0658152508160800151600a81518110610cfb57610cfa611d77565b5b602002602001018190525060405180604001604052807f1ce15073b02f08584d49f87adc56b5e61d2d50f5afb9f268b85611d49da8d0be81526020017f1dc17aff33f456aa3b477af93209c4ce2a8dea3cad23cfbf4f18d1db87a2918a8152508160800151600b81518110610d7357610d72611d77565b5b602002602001018190525090565b610d89611614565b610d9161162e565b836000015181600060038110610daa57610da9611d77565b5b602002018181525050836020015181600160038110610dcc57610dcb611d77565b5b6020020181815250508281600260038110610dea57610de9611d77565b5b602002018181525050600060608360808460076107d05a03fa90508060008114610e1357610e15565bfe5b5080610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d90611a2c565b60405180910390fd5b505092915050565b610e66611614565b610e6e611650565b836000015181600060048110610e8757610e86611d77565b5b602002018181525050836020015181600160048110610ea957610ea8611d77565b5b602002018181525050826000015181600260048110610ecb57610eca611d77565b5b602002018181525050826020015181600360048110610eed57610eec611d77565b5b602002018181525050600060608360c08460066107d05a03fa90508060008114610f1657610f18565bfe5b5080610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5090611a8c565b60405180910390fd5b505092915050565b610f69611614565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610fa6575060008360200151145b15610fca576040518060400160405280600081526020016000815250915050611001565b604051806040016040528084600001518152602001828560200151610fef9190611ce8565b83610ffa9190611c24565b8152509150505b919050565b600080600467ffffffffffffffff81111561102457611023611da6565b5b60405190808252806020026020018201604052801561105d57816020015b61104a611614565b8152602001906001900390816110425790505b5090506000600467ffffffffffffffff81111561107d5761107c611da6565b5b6040519080825280602002602001820160405280156110b657816020015b6110a3611672565b81526020019060019003908161109b5790505b5090508a826000815181106110ce576110cd611d77565b5b602002602001018190525088826001815181106110ee576110ed611d77565b5b6020026020010181905250868260028151811061110e5761110d611d77565b5b6020026020010181905250848260038151811061112e5761112d611d77565b5b6020026020010181905250898160008151811061114e5761114d611d77565b5b6020026020010181905250878160018151811061116e5761116d611d77565b5b6020026020010181905250858160028151811061118e5761118d611d77565b5b602002602001018190525083816003815181106111ae576111ad611d77565b5b60200260200101819052506111c382826111d3565b9250505098975050505050505050565b60008151835114611219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121090611a6c565b60405180910390fd5b600083519050600060068261122e9190611bca565b905060008167ffffffffffffffff81111561124c5761124b611da6565b5b60405190808252806020026020018201604052801561127a5781602001602082028036833780820191505090505b50905060005b838110156114ff5786818151811061129b5761129a611d77565b5b6020026020010151600001518260006006846112b79190611bca565b6112c19190611b74565b815181106112d2576112d1611d77565b5b6020026020010181815250508681815181106112f1576112f0611d77565b5b60200260200101516020015182600160068461130d9190611bca565b6113179190611b74565b8151811061132857611327611d77565b5b60200260200101818152505085818151811061134757611346611d77565b5b60200260200101516000015160006002811061136657611365611d77565b5b602002015182600260068461137b9190611bca565b6113859190611b74565b8151811061139657611395611d77565b5b6020026020010181815250508581815181106113b5576113b4611d77565b5b6020026020010151600001516001600281106113d4576113d3611d77565b5b60200201518260036006846113e99190611bca565b6113f39190611b74565b8151811061140457611403611d77565b5b60200260200101818152505085818151811061142357611422611d77565b5b60200260200101516020015160006002811061144257611441611d77565b5b60200201518260046006846114579190611bca565b6114619190611b74565b8151811061147257611471611d77565b5b60200260200101818152505085818151811061149157611490611d77565b5b6020026020010151602001516001600281106114b0576114af611d77565b5b60200201518260056006846114c59190611bca565b6114cf9190611b74565b815181106114e0576114df611d77565b5b60200260200101818152505080806114f790611c9f565b915050611280565b50611508611698565b6000602082602086026020860160086107d05a03fa9050806000811461152d5761152f565bfe5b5080611570576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156790611aac565b60405180910390fd5b60008260006001811061158657611585611d77565b5b602002015114159550505050505092915050565b60405180606001604052806115ad611614565b81526020016115ba611672565b81526020016115c7611614565b81525090565b6040518060a001604052806115e0611614565b81526020016115ed611672565b81526020016115fa611672565b8152602001611607611672565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b60405180604001604052806116856116ba565b81526020016116926116ba565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b60006116ef6116ea84611af1565b611acc565b9050808285604086028201111561170957611708611dda565b5b60005b85811015611739578161171f8882611867565b84526020840193506040830192505060018101905061170c565b5050509392505050565b600061175661175184611b17565b611acc565b905080828560208602820111156117705761176f611dda565b5b60005b858110156117a057816117868882611892565b845260208401935060208301925050600181019050611773565b5050509392505050565b60006117bd6117b884611b3d565b611acc565b905080828560208602820111156117d7576117d6611dda565b5b60005b8581101561180757816117ed8882611892565b8452602084019350602083019250506001810190506117da565b5050509392505050565b600082601f83011261182657611825611dd5565b5b60026118338482856116dc565b91505092915050565b600082601f83011261185157611850611dd5565b5b600b61185e848285611743565b91505092915050565b600082601f83011261187c5761187b611dd5565b5b60026118898482856117aa565b91505092915050565b6000813590506118a181611eeb565b92915050565b60008060008061026085870312156118c2576118c1611ddf565b5b60006118d087828801611867565b94505060406118e187828801611811565b93505060c06118f287828801611867565b9250506101006119048782880161183c565b91505092959194509250565b61191981611c58565b82525050565b600061192c601283611b63565b915061193782611df5565b602082019050919050565b600061194f601283611b63565b915061195a82611e1e565b602082019050919050565b6000611972601f83611b63565b915061197d82611e47565b602082019050919050565b6000611995601683611b63565b91506119a082611e70565b602082019050919050565b60006119b8601283611b63565b91506119c382611e99565b602082019050919050565b60006119db601583611b63565b91506119e682611ec2565b602082019050919050565b6000602082019050611a066000830184611910565b92915050565b60006020820190508181036000830152611a258161191f565b9050919050565b60006020820190508181036000830152611a4581611942565b9050919050565b60006020820190508181036000830152611a6581611965565b9050919050565b60006020820190508181036000830152611a8581611988565b9050919050565b60006020820190508181036000830152611aa5816119ab565b9050919050565b60006020820190508181036000830152611ac5816119ce565b9050919050565b6000611ad6611ae7565b9050611ae28282611c6e565b919050565b6000604051905090565b600067ffffffffffffffff821115611b0c57611b0b611da6565b5b602082029050919050565b600067ffffffffffffffff821115611b3257611b31611da6565b5b602082029050919050565b600067ffffffffffffffff821115611b5857611b57611da6565b5b602082029050919050565b600082825260208201905092915050565b6000611b7f82611c64565b9150611b8a83611c64565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611bbf57611bbe611d19565b5b828201905092915050565b6000611bd582611c64565b9150611be083611c64565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c1957611c18611d19565b5b828202905092915050565b6000611c2f82611c64565b9150611c3a83611c64565b925082821015611c4d57611c4c611d19565b5b828203905092915050565b60008115159050919050565b6000819050919050565b611c7782611de4565b810181811067ffffffffffffffff82111715611c9657611c95611da6565b5b80604052505050565b6000611caa82611c64565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611cdd57611cdc611d19565b5b600182019050919050565b6000611cf382611c64565b9150611cfe83611c64565b925082611d0e57611d0d611d48565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f76657269666965722d6261642d696e7075740000000000000000000000000000600082015250565b7f70616972696e672d6d756c2d6661696c65640000000000000000000000000000600082015250565b7f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400600082015250565b7f70616972696e672d6c656e677468732d6661696c656400000000000000000000600082015250565b7f70616972696e672d6164642d6661696c65640000000000000000000000000000600082015250565b7f70616972696e672d6f70636f64652d6661696c65640000000000000000000000600082015250565b611ef481611c64565b8114611eff57600080fd5b5056fea2646970667358221220d0ee6ae44949491a6ae1bbed86c61030199adc591121357294d7fc1fc0d6c85364736f6c63430008050033"

type Verifier20_7ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: Verifier20_7ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Verifier20_7__factory extends ContractFactory {
  constructor(...args: Verifier20_7ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier20_7> {
    return super.deploy(overrides || {}) as Promise<Verifier20_7>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): Verifier20_7 {
    return super.attach(address) as Verifier20_7
  }
  override connect(signer: Signer): Verifier20_7__factory {
    return super.connect(signer) as Verifier20_7__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): Verifier20_7Interface {
    return new utils.Interface(_abi) as Verifier20_7Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier20_7 {
    return new Contract(address, _abi, signerOrProvider) as Verifier20_7
  }
}
