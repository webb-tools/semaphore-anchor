/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Verifier19_2,
  Verifier19_2Interface,
} from "../../verifiers/Verifier19_2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[6]",
        name: "input",
        type: "uint256[6]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ce0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f398789b14610030575b600080fd5b61004a6004803603810190610045919061164f565b610060565b6040516100579190611799565b60405180910390f35b600061006a611342565b60405180604001604052808760006002811061008957610088611b1f565b5b60200201518152602001876001600281106100a7576100a6611b1f565b5b6020020151815250816000018190525060405180604001604052806040518060400160405280886000600281106100e1576100e0611b1f565b5b60200201516000600281106100f9576100f8611b1f565b5b602002015181526020018860006002811061011757610116611b1f565b5b602002015160016002811061012f5761012e611b1f565b5b6020020151815250815260200160405180604001604052808860016002811061015b5761015a611b1f565b5b602002015160006002811061017357610172611b1f565b5b602002015181526020018860016002811061019157610190611b1f565b5b60200201516001600281106101a9576101a8611b1f565b5b602002015181525081525081602001819052506040518060400160405280856000600281106101db576101da611b1f565b5b60200201518152602001856001600281106101f9576101f8611b1f565b5b602002015181525081604001819052506000600667ffffffffffffffff81111561022657610225611b4e565b5b6040519080825280602002602001820160405280156102545781602001602082028036833780820191505090505b50905060005b60068110156102ad5784816006811061027657610275611b1f565b5b602002015182828151811061028e5761028d611b1f565b5b60200260200101818152505080806102a590611a47565b91505061025a565b5060006102ba82846102da565b14156102cb576001925050506102d2565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000019050600061030a6104cd565b905080608001515160018651610320919061191c565b14610360576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610357906117b4565b60405180910390fd5b60006040518060400160405280600081526020016000815250905060005b865181101561044f578387828151811061039b5761039a611b1f565b5b6020026020010151106103e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103da906117f4565b60405180910390fd5b61043a8261043585608001516001856103fc919061191c565b8151811061040d5761040c611b1f565b5b60200260200101518a858151811061042857610427611b1f565b5b6020026020010151610b29565b610c06565b9150808061044790611a47565b91505061037e565b5061047981836080015160008151811061046c5761046b611b1f565b5b6020026020010151610c06565b90506104af61048b8660000151610d09565b8660200151846000015185602001518587604001518b604001518960600151610dae565b6104bf57600193505050506104c7565b600093505050505b92915050565b6104d5611375565b60405180604001604052807f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281526020017f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19268152508160000181905250604051806040016040528060405180604001604052807f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c81526020017f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab815250815260200160405180604001604052807f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781526020017f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec88152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f1549ed15924e8a79644510b5e22c891b67e5986cdd02fe32a2f31ee39cf116c081526020017f2b00e8a7be114af7bc56dc0e5a22615a8f31d6c023c899076833489047ddb0c2815250815260200160405180604001604052807f26bdbd545d9daf7f775115182ace4f3ca785f3cc3c8c6b9067a26cb17e7e97e881526020017f2a8469af89753d8f7f77e09919f8c357fba0093f6a84d4236b42a972c61268898152508152508160600181905250600767ffffffffffffffff81111561079c5761079b611b4e565b5b6040519080825280602002602001820160405280156107d557816020015b6107c26113bc565b8152602001906001900390816107ba5790505b50816080018190525060405180604001604052807f0b9a84dd7d283966e7c630b74e80b0b37223cee50452dafbe82155bafe9b155181526020017f026bd2b6cf8e968ccd0601f5b94e4eb7639c4aa285d5f074e2e111e5197e507f815250816080015160008151811061084b5761084a611b1f565b5b602002602001018190525060405180604001604052807f1c9a9f2f59d0fe5f348dd0b6c9e29ec1e84eef3ca3b877d4a9e9d5befadfbc9a81526020017f2cbf27ba4b195dbc4483372d16bd2c99dd16806b44e769a5f99eedbc285cac0581525081608001516001815181106108c3576108c2611b1f565b5b602002602001018190525060405180604001604052807f22b9e2cbd061ea5bc1dcab5267304862d7347e48ff8f1b11921dd587d7a0bd4981526020017f22ab8fe6d3a61608541164578d6e3f7501642425f42d9940f3db8fa43f375c4e815250816080015160028151811061093b5761093a611b1f565b5b602002602001018190525060405180604001604052807f28297470ebbde0273eff169efe4e9c4c99189419829aee32bbff8f459ddb53c181526020017f2b25b67f5371d72bef961ddc19e5454087edad7b5e5e44bee8ce3a1e6d63e14881525081608001516003815181106109b3576109b2611b1f565b5b602002602001018190525060405180604001604052807f2bbe24cd53f48e3a6f731f8790322432d686d12f004ba2790bce09f3d406641c81526020017f091f4adbfa6da194a7510f5b55b255db97424fecde1ada35c3bf66828af7ab7e8152508160800151600481518110610a2b57610a2a611b1f565b5b602002602001018190525060405180604001604052807f0cde46dad50c4e5995d61c34ac28b59946762e42237763f0260371262438af5481526020017f123f9b1704b5f7e663097c10bcf37cae26e6e9a242f143293c9e07f0b65843398152508160800151600581518110610aa357610aa2611b1f565b5b602002602001018190525060405180604001604052807f0b41309934ec33a3baa1f088161249b68f45f4cf1dc49a34742aef4458da28bd81526020017f187398d1c2eb6cb051b7a08007c41ec784df05e555df326da42e066c9128e79b8152508160800151600681518110610b1b57610b1a611b1f565b5b602002602001018190525090565b610b316113bc565b610b396113d6565b836000015181600060038110610b5257610b51611b1f565b5b602002018181525050836020015181600160038110610b7457610b73611b1f565b5b6020020181815250508281600260038110610b9257610b91611b1f565b5b602002018181525050600060608360808460076107d05a03fa90508060008114610bbb57610bbd565bfe5b5080610bfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf5906117d4565b60405180910390fd5b505092915050565b610c0e6113bc565b610c166113f8565b836000015181600060048110610c2f57610c2e611b1f565b5b602002018181525050836020015181600160048110610c5157610c50611b1f565b5b602002018181525050826000015181600260048110610c7357610c72611b1f565b5b602002018181525050826020015181600360048110610c9557610c94611b1f565b5b602002018181525050600060608360c08460066107d05a03fa90508060008114610cbe57610cc0565bfe5b5080610d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf890611834565b60405180910390fd5b505092915050565b610d116113bc565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610d4e575060008360200151145b15610d72576040518060400160405280600081526020016000815250915050610da9565b604051806040016040528084600001518152602001828560200151610d979190611a90565b83610da291906119cc565b8152509150505b919050565b600080600467ffffffffffffffff811115610dcc57610dcb611b4e565b5b604051908082528060200260200182016040528015610e0557816020015b610df26113bc565b815260200190600190039081610dea5790505b5090506000600467ffffffffffffffff811115610e2557610e24611b4e565b5b604051908082528060200260200182016040528015610e5e57816020015b610e4b61141a565b815260200190600190039081610e435790505b5090508a82600081518110610e7657610e75611b1f565b5b60200260200101819052508882600181518110610e9657610e95611b1f565b5b60200260200101819052508682600281518110610eb657610eb5611b1f565b5b60200260200101819052508482600381518110610ed657610ed5611b1f565b5b60200260200101819052508981600081518110610ef657610ef5611b1f565b5b60200260200101819052508781600181518110610f1657610f15611b1f565b5b60200260200101819052508581600281518110610f3657610f35611b1f565b5b60200260200101819052508381600381518110610f5657610f55611b1f565b5b6020026020010181905250610f6b8282610f7b565b9250505098975050505050505050565b60008151835114610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb890611814565b60405180910390fd5b6000835190506000600682610fd69190611972565b905060008167ffffffffffffffff811115610ff457610ff3611b4e565b5b6040519080825280602002602001820160405280156110225781602001602082028036833780820191505090505b50905060005b838110156112a75786818151811061104357611042611b1f565b5b60200260200101516000015182600060068461105f9190611972565b611069919061191c565b8151811061107a57611079611b1f565b5b60200260200101818152505086818151811061109957611098611b1f565b5b6020026020010151602001518260016006846110b59190611972565b6110bf919061191c565b815181106110d0576110cf611b1f565b5b6020026020010181815250508581815181106110ef576110ee611b1f565b5b60200260200101516000015160006002811061110e5761110d611b1f565b5b60200201518260026006846111239190611972565b61112d919061191c565b8151811061113e5761113d611b1f565b5b60200260200101818152505085818151811061115d5761115c611b1f565b5b60200260200101516000015160016002811061117c5761117b611b1f565b5b60200201518260036006846111919190611972565b61119b919061191c565b815181106111ac576111ab611b1f565b5b6020026020010181815250508581815181106111cb576111ca611b1f565b5b6020026020010151602001516000600281106111ea576111e9611b1f565b5b60200201518260046006846111ff9190611972565b611209919061191c565b8151811061121a57611219611b1f565b5b60200260200101818152505085818151811061123957611238611b1f565b5b60200260200101516020015160016002811061125857611257611b1f565b5b602002015182600560068461126d9190611972565b611277919061191c565b8151811061128857611287611b1f565b5b602002602001018181525050808061129f90611a47565b915050611028565b506112b0611440565b6000602082602086026020860160086107d05a03fa905080600081146112d5576112d7565bfe5b5080611318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130f90611854565b60405180910390fd5b60008260006001811061132e5761132d611b1f565b5b602002015114159550505050505092915050565b60405180606001604052806113556113bc565b815260200161136261141a565b815260200161136f6113bc565b81525090565b6040518060a001604052806113886113bc565b815260200161139561141a565b81526020016113a261141a565b81526020016113af61141a565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b604051806040016040528061142d611462565b815260200161143a611462565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b600061149761149284611899565b611874565b905080828560408602820111156114b1576114b0611b82565b5b60005b858110156114e157816114c788826115e4565b8452602084019350604083019250506001810190506114b4565b5050509392505050565b60006114fe6114f9846118bf565b611874565b9050808285602086028201111561151857611517611b82565b5b60005b85811015611548578161152e888261163a565b84526020840193506020830192505060018101905061151b565b5050509392505050565b6000611565611560846118e5565b611874565b9050808285602086028201111561157f5761157e611b82565b5b60005b858110156115af5781611595888261163a565b845260208401935060208301925050600181019050611582565b5050509392505050565b600082601f8301126115ce576115cd611b7d565b5b60026115db848285611484565b91505092915050565b600082601f8301126115f9576115f8611b7d565b5b60026116068482856114eb565b91505092915050565b600082601f83011261162457611623611b7d565b5b6006611631848285611552565b91505092915050565b60008135905061164981611c93565b92915050565b6000806000806101c0858703121561166a57611669611b87565b5b6000611678878288016115e4565b9450506040611689878288016115b9565b93505060c061169a878288016115e4565b9250506101006116ac8782880161160f565b91505092959194509250565b6116c181611a00565b82525050565b60006116d460128361190b565b91506116df82611b9d565b602082019050919050565b60006116f760128361190b565b915061170282611bc6565b602082019050919050565b600061171a601f8361190b565b915061172582611bef565b602082019050919050565b600061173d60168361190b565b915061174882611c18565b602082019050919050565b600061176060128361190b565b915061176b82611c41565b602082019050919050565b600061178360158361190b565b915061178e82611c6a565b602082019050919050565b60006020820190506117ae60008301846116b8565b92915050565b600060208201905081810360008301526117cd816116c7565b9050919050565b600060208201905081810360008301526117ed816116ea565b9050919050565b6000602082019050818103600083015261180d8161170d565b9050919050565b6000602082019050818103600083015261182d81611730565b9050919050565b6000602082019050818103600083015261184d81611753565b9050919050565b6000602082019050818103600083015261186d81611776565b9050919050565b600061187e61188f565b905061188a8282611a16565b919050565b6000604051905090565b600067ffffffffffffffff8211156118b4576118b3611b4e565b5b602082029050919050565b600067ffffffffffffffff8211156118da576118d9611b4e565b5b602082029050919050565b600067ffffffffffffffff821115611900576118ff611b4e565b5b602082029050919050565b600082825260208201905092915050565b600061192782611a0c565b915061193283611a0c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561196757611966611ac1565b5b828201905092915050565b600061197d82611a0c565b915061198883611a0c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119c1576119c0611ac1565b5b828202905092915050565b60006119d782611a0c565b91506119e283611a0c565b9250828210156119f5576119f4611ac1565b5b828203905092915050565b60008115159050919050565b6000819050919050565b611a1f82611b8c565b810181811067ffffffffffffffff82111715611a3e57611a3d611b4e565b5b80604052505050565b6000611a5282611a0c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611a8557611a84611ac1565b5b600182019050919050565b6000611a9b82611a0c565b9150611aa683611a0c565b925082611ab657611ab5611af0565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f76657269666965722d6261642d696e7075740000000000000000000000000000600082015250565b7f70616972696e672d6d756c2d6661696c65640000000000000000000000000000600082015250565b7f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400600082015250565b7f70616972696e672d6c656e677468732d6661696c656400000000000000000000600082015250565b7f70616972696e672d6164642d6661696c65640000000000000000000000000000600082015250565b7f70616972696e672d6f70636f64652d6661696c65640000000000000000000000600082015250565b611c9c81611a0c565b8114611ca757600080fd5b5056fea2646970667358221220028637e20f33399c7de852466c8ac4a3555a242a9b6a6f0a94a3abbdf0c5e91964736f6c63430008060033";

type Verifier19_2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier19_2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier19_2__factory extends ContractFactory {
  constructor(...args: Verifier19_2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier19_2> {
    return super.deploy(overrides || {}) as Promise<Verifier19_2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier19_2 {
    return super.attach(address) as Verifier19_2;
  }
  override connect(signer: Signer): Verifier19_2__factory {
    return super.connect(signer) as Verifier19_2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier19_2Interface {
    return new utils.Interface(_abi) as Verifier19_2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier19_2 {
    return new Contract(address, _abi, signerOrProvider) as Verifier19_2;
  }
}
