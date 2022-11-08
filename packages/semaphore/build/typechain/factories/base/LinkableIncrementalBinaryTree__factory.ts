/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LinkableIncrementalBinaryTree,
  LinkableIncrementalBinaryTreeInterface,
} from "../../base/LinkableIncrementalBinaryTree";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "latestLeafIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleRoot",
        type: "uint256",
      },
    ],
    name: "EdgeAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "latestLeafIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "merkleRoot",
        type: "uint256",
      },
    ],
    name: "EdgeUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "EVM_CHAIN_ID_TYPE",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainIdType",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_resourceId",
        type: "bytes32",
      },
    ],
    name: "parseChainIdFromResourceId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
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
  "0x612c6c610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100f45760003560e01c806374d4479e11610096578063c2230d6e11610070578063c2230d6e14610295578063ce8f1f35146102c5578063e4f91356146102f5578063e829558814610325576100f4565b806374d4479e1461021e57806384c5969f1461024e5780638b7e878214610277576100f4565b80633408e470116100d25780633408e47014610182578063424c5fab146101a05780634c830cbd146101d05780635e295f54146101ee576100f4565b806311bcbf8e146100f9578063243de1f1146101295780633330ca3a14610159575b600080fd5b610113600480360381019061010e9190611bfa565b610355565b604051610120919061221e565b60405180910390f35b610143600480360381019061013e9190611b31565b610421565b60405161015091906121fc565b60405180910390f35b81801561016557600080fd5b50610180600480360381019061017b9190611d09565b610553565b005b61018a6105f3565b60405161019791906123b4565b60405180910390f35b6101ba60048036038101906101b59190611b31565b610600565b6040516101c791906121bf565b60405180910390f35b6101d861078f565b6040516101e591906123cf565b60405180910390f35b61020860048036038101906102039190611bba565b6107e4565b604051610215919061221e565b60405180910390f35b61023860048036038101906102339190611b5e565b610887565b604051610245919061221e565b60405180910390f35b81801561025a57600080fd5b5061027560048036038101906102709190611c4d565b610afc565b005b61027f610ee9565b60405161028c9190612239565b60405180910390f35b6102af60048036038101906102aa9190611b04565b610ef2565b6040516102bc91906123ea565b60405180910390f35b6102df60048036038101906102da9190611b31565b610f0b565b6040516102ec91906123b4565b60405180910390f35b61030f600480360381019061030a9190611bba565b610f44565b60405161031c919061221e565b60405180910390f35b61033f600480360381019061033a9190611d5c565b610f71565b60405161034c91906123b4565b60405180910390f35b600080821415610368576000905061041a565b600084600a01600085815260200190815260200160002060009054906101000a900463ffffffff16905060008190505b85600901600086815260200190815260200160002060008263ffffffff1663ffffffff168152602001908152602001600020548414156103dd5760019250505061041a565b60008163ffffffff1614156103f157601e90505b80806103fc90612706565b9150508163ffffffff168163ffffffff161415610398576000925050505b9392505050565b606060008260000160009054906101000a900460ff1660ff1667ffffffffffffffff81111561045357610452612846565b5b6040519080825280602002602001820160405280156104815781602001602082028036833780820191505090505b50905060005b8360000160009054906101000a900460ff1660ff16811015610549576001816104b09190612521565b846008018054905010610509578360080181815481106104d3576104d2612817565b5b9060005260206000209060040201600101548282815181106104f8576104f7612817565b5b602002602001018181525050610536565b6105168460010154610f71565b82828151811061052957610528612817565b5b6020026020010181815250505b808061054190612761565b915050610487565b5080915050919050565b6000821180156105675750602060ff168211155b6105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059d906122d4565b60405180910390fd5b8183600101819055506105b882610f71565b83600301600080815260200190815260200160002081905550808360000160006101000a81548160ff021916908360ff160217905550505050565b6000804690508091505090565b606060008260000160009054906101000a900460ff1660ff1667ffffffffffffffff81111561063257610631612846565b5b60405190808252806020026020018201604052801561066b57816020015b610658611926565b8152602001906001900390816106505790505b50905060005b8360000160009054906101000a900460ff1660ff168110156107855760018161069a9190612521565b846008018054905010610721578360080181815481106106bd576106bc612817565b5b906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505082828151811061071157610710612817565b5b6020026020010181905250610772565b6040518060800160405280600081526020016107408660010154610f71565b8152602001600081526020016000801b81525082828151811061076657610765612817565b5b60200260200101819052505b808061077d90612761565b915050610671565b5080915050919050565b60008061079a6105f3565b60e01b9050600061010060f01b9050600081836040516020016107be929190612193565b6040516020818303038152906040529050806107d99061269f565b60d01c935050505090565b6000808214156107f75760009050610881565b60008360020160009054906101000a900463ffffffff16905060008190505b8460030160008263ffffffff1681526020019081526020016000205484141561084457600192505050610881565b60008163ffffffff16141561085857601e90505b808061086390612706565b9150508163ffffffff168163ffffffff161415610816576000925050505b92915050565b60006108ae83836000815181106108a1576108a0612817565b5b60200260200101516107e4565b6108ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e4906122b4565b60405180910390fd5b60018360000160009054906101000a900460ff1661090b9190612577565b60ff16825114610950576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094790612354565b60405180910390fd5b60006001905060005b8460080180549050811015610a4d5760008560080182815481106109805761097f612817565b5b906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090506109ec8682600001518786815181106109df576109de612817565b5b6020026020010151610355565b610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a22906122f4565b60405180910390fd5b8280610a3690612761565b935050508080610a4590612761565b915050610959565b505b60018460000160009054906101000a900460ff16610a6d9190612577565b60ff168114610af157610a838460010154610f71565b838281518110610a9657610a95612817565b5b602002602001015114610ade576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad590612314565b60405180910390fd5b8080610ae990612761565b915050610a4f565b600191505092915050565b610b0a8787868686866115d1565b610b49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4090612254565b60405180910390fd5b6000876001015490506000869050600080600090505b838160ff161015610e62578060ff16600187878460ff16818110610b8657610b85612817565b5b9050602002016020810190610b9b9190611db6565b1660ff16901b82179150600086868360ff16818110610bbd57610bbc612817565b5b9050602002016020810190610bd29190611db6565b60ff161415610d1b578a60050160008260ff168152602001908152602001600020600160028110610c0657610c05612817565b5b015488888360ff16818110610c1e57610c1d612817565b5b905060200201351415610c5d57828b60050160008360ff168152602001908152602001600020600060028110610c5757610c56612817565b5b01819055505b73__$7dbbf6f96c7ef3a793cfa7d9c67f652bb8$__6329a5f2f660405180604001604052808681526020018b8b8660ff16818110610c9e57610c9d612817565b5b905060200201358152506040518263ffffffff1660e01b8152600401610cc491906121e1565b60206040518083038186803b158015610cdc57600080fd5b505af4158015610cf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d149190611d89565b9250610e57565b8a60050160008260ff168152602001908152602001600020600060028110610d4657610d45612817565b5b015488888360ff16818110610d5e57610d5d612817565b5b905060200201351415610d9d57828b60050160008360ff168152602001908152602001600020600160028110610d9757610d96612817565b5b01819055505b73__$7dbbf6f96c7ef3a793cfa7d9c67f652bb8$__6329a5f2f660405180604001604052808b8b8660ff16818110610dd857610dd7612817565b5b905060200201358152602001868152506040518263ffffffff1660e01b8152600401610e0491906121e1565b60206040518083038186803b158015610e1c57600080fd5b505af4158015610e30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e549190611d89565b92505b806001019050610b5f565b5089600401548110610ea9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea090612334565b60405180910390fd5b818a60030160008c60020160009054906101000a900463ffffffff1663ffffffff1681526020019081526020016000208190555050505050505050505050565b61010060f01b81565b600060d082901b60d01c65ffffffffffff169050919050565b60008160030160008360020160009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020549050919050565b600082600701600083815260200190815260200160002060009054906101000a900460ff16905092915050565b600080821415610fa3577f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c90506115cc565b6001821415610fd4577f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f890506115cc565b6002821415611005577f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc62276590506115cc565b6003821415611036577f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee90506115cc565b6004821415611067577f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa501358790506115cc565b6005821415611098577f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc90506115cc565b60068214156110c9577f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f90506115cc565b60078214156110fa577f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef99921990506115cc565b600882141561112b577f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d90506115cc565b600982141561115c577f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce90506115cc565b600a82141561118d577f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad790506115cc565b600b8214156111be577f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b4790506115cc565b600c8214156111ef577f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b90506115cc565b600d821415611220577f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d36690506115cc565b600e821415611251577f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef90506115cc565b600f821415611282577f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca90506115cc565b60108214156112b3577f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec90506115cc565b60118214156112e3577e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b90506115cc565b6012821415611314577f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f90506115cc565b6013821415611345577f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b6390506115cc565b6014821415611376577f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb90506115cc565b60158214156113a7577f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b1327990506115cc565b60168214156113d8577f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff90506115cc565b6017821415611409577f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d996290506115cc565b601882141561143a577f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc1090506115cc565b601982141561146b577f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a01390506115cc565b601a82141561149c577f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac1490506115cc565b601b8214156114cd577f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc090506115cc565b601c8214156114fe577f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d5090506115cc565b601d82141561152f577f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18790506115cc565b601e821415611560577f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa090506115cc565b601f821415611591577f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad0690506115cc565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c390612394565b60405180910390fd5b919050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018610611635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162c90612274565b60405180910390fd5b8660010154838390501480156116515750866001015485859050145b611690576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168790612374565b60405180910390fd5b600086905060005b88600101548160ff1610156118e6577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000187878360ff168181106116de576116dd612817565b5b9050602002013510611725576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171c90612294565b60405180910390fd5b600085858360ff1681811061173d5761173c612817565b5b90506020020160208101906117529190611db6565b60ff1614156118195773__$7dbbf6f96c7ef3a793cfa7d9c67f652bb8$__6329a5f2f660405180604001604052808581526020018a8a8660ff1681811061179c5761179b612817565b5b905060200201358152506040518263ffffffff1660e01b81526004016117c291906121e1565b60206040518083038186803b1580156117da57600080fd5b505af41580156117ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118129190611d89565b91506118d3565b73__$7dbbf6f96c7ef3a793cfa7d9c67f652bb8$__6329a5f2f660405180604001604052808a8a8660ff1681811061185457611853612817565b5b905060200201358152602001858152506040518263ffffffff1660e01b815260040161188091906121e1565b60206040518083038186803b15801561189857600080fd5b505af41580156118ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d09190611d89565b91505b80806118de906127aa565b915050611698565b508760030160008960020160009054906101000a900463ffffffff1663ffffffff1681526020019081526020016000205481149150509695505050505050565b6040518060800160405280600081526020016000815260200160008152602001600080191681525090565b600061196461195f8461242a565b612405565b9050808382526020820190508285602086028201111561198757611986612894565b5b60005b858110156119b7578161199d8882611ac5565b84526020840193506020830192505060018101905061198a565b5050509392505050565b60008083601f8401126119d7576119d661288f565b5b8235905067ffffffffffffffff8111156119f4576119f361288a565b5b602083019150836020820283011115611a1057611a0f612894565b5b9250929050565b600082601f830112611a2c57611a2b61288f565b5b8135611a3c848260208601611951565b91505092915050565b60008083601f840112611a5b57611a5a61288f565b5b8235905067ffffffffffffffff811115611a7857611a7761288a565b5b602083019150836020820283011115611a9457611a93612894565b5b9250929050565b600081359050611aaa81612bda565b92915050565b600081359050611abf81612bf1565b92915050565b600081359050611ad481612c08565b92915050565b600081519050611ae981612c08565b92915050565b600081359050611afe81612c1f565b92915050565b600060208284031215611b1a57611b1961289e565b5b6000611b2884828501611a9b565b91505092915050565b600060208284031215611b4757611b4661289e565b5b6000611b5584828501611ab0565b91505092915050565b60008060408385031215611b7557611b7461289e565b5b6000611b8385828601611ab0565b925050602083013567ffffffffffffffff811115611ba457611ba3612899565b5b611bb085828601611a17565b9150509250929050565b60008060408385031215611bd157611bd061289e565b5b6000611bdf85828601611ab0565b9250506020611bf085828601611ac5565b9150509250929050565b600080600060608486031215611c1357611c1261289e565b5b6000611c2186828701611ab0565b9350506020611c3286828701611ac5565b9250506040611c4386828701611ac5565b9150509250925092565b600080600080600080600060a0888a031215611c6c57611c6b61289e565b5b6000611c7a8a828b01611ab0565b9750506020611c8b8a828b01611ac5565b9650506040611c9c8a828b01611ac5565b955050606088013567ffffffffffffffff811115611cbd57611cbc612899565b5b611cc98a828b016119c1565b9450945050608088013567ffffffffffffffff811115611cec57611ceb612899565b5b611cf88a828b01611a45565b925092505092959891949750929550565b600080600060608486031215611d2257611d2161289e565b5b6000611d3086828701611ab0565b9350506020611d4186828701611ac5565b9250506040611d5286828701611aef565b9150509250925092565b600060208284031215611d7257611d7161289e565b5b6000611d8084828501611ac5565b91505092915050565b600060208284031215611d9f57611d9e61289e565b5b6000611dad84828501611ada565b91505092915050565b600060208284031215611dcc57611dcb61289e565b5b6000611dda84828501611aef565b91505092915050565b6000611def8383612102565b60808301905092915050565b6000611e078383612166565b60208301905092915050565b6000611e1e82612490565b611e2881856124e3565b9350611e3383612456565b8060005b83811015611e64578151611e4b8882611de3565b9750611e56836124bc565b925050600181019050611e37565b5085935050505092915050565b611e7a8161249b565b611e8481846124f4565b9250611e8f82612466565b8060005b83811015611ec0578151611ea78782611dfb565b9650611eb2836124c9565b925050600181019050611e93565b505050505050565b6000611ed3826124a6565b611edd81856124ff565b9350611ee883612470565b8060005b83811015611f19578151611f008882611dfb565b9750611f0b836124d6565b925050600181019050611eec565b5085935050505092915050565b611f2f816125ae565b82525050565b611f3e816125ba565b82525050565b611f55611f50826125ba565b6127d4565b82525050565b611f64816125e6565b82525050565b611f7b611f76826125f0565b6127de565b82525050565b6000611f8e603b83612510565b9150611f99826128c1565b604082019050919050565b6000611fb1604083612510565b9150611fbc82612910565b604082019050919050565b6000611fd4604883612510565b9150611fdf8261295f565b606082019050919050565b6000611ff7601c83612510565b9150612002826129d4565b602082019050919050565b600061201a604283612510565b9150612025826129fd565b606082019050919050565b600061203d601883612510565b915061204882612a72565b602082019050919050565b6000612060603083612510565b915061206b82612a9b565b604082019050919050565b6000612083602e83612510565b915061208e82612aea565b604082019050919050565b60006120a6601b83612510565b91506120b182612b39565b602082019050919050565b60006120c9603c83612510565b91506120d482612b62565b604082019050919050565b60006120ec601383612510565b91506120f782612bb1565b602082019050919050565b6080820160008201516121186000850182612166565b50602082015161212b6020850182612166565b50604082015161213e6040850182612166565b5060608201516121516060850182611f5b565b50505050565b61216081612652565b82525050565b61216f81612652565b82525050565b61217e8161266c565b82525050565b61218d8161267e565b82525050565b600061219f8285611f44565b6002820191506121af8284611f6a565b6004820191508190509392505050565b600060208201905081810360008301526121d98184611e13565b905092915050565b60006040820190506121f66000830184611e71565b92915050565b600060208201905081810360008301526122168184611ec8565b905092915050565b60006020820190506122336000830184611f26565b92915050565b600060208201905061224e6000830184611f35565b92915050565b6000602082019050818103600083015261226d81611f81565b9050919050565b6000602082019050818103600083015261228d81611fa4565b9050919050565b600060208201905081810360008301526122ad81611fc7565b9050919050565b600060208201905081810360008301526122cd81611fea565b9050919050565b600060208201905081810360008301526122ed8161200d565b9050919050565b6000602082019050818103600083015261230d81612030565b9050919050565b6000602082019050818103600083015261232d81612053565b9050919050565b6000602082019050818103600083015261234d81612076565b9050919050565b6000602082019050818103600083015261236d81612099565b9050919050565b6000602082019050818103600083015261238d816120bc565b9050919050565b600060208201905081810360008301526123ad816120df565b9050919050565b60006020820190506123c96000830184612157565b92915050565b60006020820190506123e46000830184612175565b92915050565b60006020820190506123ff6000830184612184565b92915050565b600061240f612420565b905061241b8282612730565b919050565b6000604051905090565b600067ffffffffffffffff82111561244557612444612846565b5b602082029050602081019050919050565b6000819050602082019050919050565b6000819050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600060029050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061252c82612652565b915061253783612652565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561256c5761256b6127e8565b5b828201905092915050565b600061258282612692565b915061258d83612692565b92508260ff038211156125a3576125a26127e8565b5b828201905092915050565b60008115159050919050565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffffffff000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6000819050919050565b600063ffffffff82169050919050565b600065ffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600060ff82169050919050565b60006126aa826124b1565b826126b484612480565b90506126bf81612875565b925060068210156126ff576126fa7fffffffffffff0000000000000000000000000000000000000000000000000000836006036008026128b4565b831692505b5050919050565b60006127118261265c565b91506000821415612725576127246127e8565b5b600182039050919050565b612739826128a3565b810181811067ffffffffffffffff8211171561275857612757612846565b5b80604052505050565b600061276c82612652565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561279f5761279e6127e8565b5b600182019050919050565b60006127b582612692565b915060ff8214156127c9576127c86127e8565b5b600182019050919050565b6000819050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000612881825161261c565b80915050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b600082821b905092915050565b7f4c696e6b61626c65496e6372656d656e74616c42696e617279547265653a206c60008201527f656166206973206e6f742070617274206f662074686520747265650000000000602082015250565b7f4c696e6b61626c65496e6372656d656e74616c42696e617279547265653a206c60008201527f656166206d757374206265203c20534e41524b5f5343414c41525f4649454c44602082015250565b7f4c696e6b61626c65496e6372656d656e74616c42696e617279547265653a207360008201527f69626c696e67206e6f6465206d757374206265203c20534e41524b5f5343414c60208201527f41525f4649454c44000000000000000000000000000000000000000000000000604082015250565b7f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f7400000000600082015250565b7f4c696e6b61626c65496e6372656d656e74616c42696e617279547265653a207460008201527f726565206465707468206d757374206265206265747765656e203120616e642060208201527f3332000000000000000000000000000000000000000000000000000000000000604082015250565b7f4e65696768626f757220726f6f74206e6f7420666f756e640000000000000000600082015250565b7f6e6f6e2d6578697374656e742065646765206973206e6f742073657420746f2060008201527f7468652064656661756c7420726f6f7400000000000000000000000000000000602082015250565b7f496e6372656d656e74616c42696e617279547265653a206c65616620696e646560008201527f78206f7574206f662072616e6765000000000000000000000000000000000000602082015250565b7f496e636f727265637420726f6f74206172726179206c656e6774680000000000600082015250565b7f4c696e6b61626c65496e6372656d656e74616c42696e617279547265653a206c60008201527f656e677468206f662070617468206973206e6f7420636f727265637400000000602082015250565b7f496e646578206f7574206f6620626f756e647300000000000000000000000000600082015250565b612be3816125e6565b8114612bee57600080fd5b50565b612bfa81612648565b8114612c0557600080fd5b50565b612c1181612652565b8114612c1c57600080fd5b50565b612c2881612692565b8114612c3357600080fd5b5056fea26469706673582212205a06039b819790851bf535df2c7d7bb84c96ccfa1beff0ee8eb2bb4e9a7af73664736f6c63430008060033";

type LinkableIncrementalBinaryTreeConstructorParams =
  | [
      linkLibraryAddresses: LinkableIncrementalBinaryTreeLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinkableIncrementalBinaryTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class LinkableIncrementalBinaryTree__factory extends ContractFactory {
  constructor(...args: LinkableIncrementalBinaryTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        LinkableIncrementalBinaryTree__factory.linkBytecode(
          linkLibraryAddresses
        ),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: LinkableIncrementalBinaryTreeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$7dbbf6f96c7ef3a793cfa7d9c67f652bb8\\$__", "g"),
      linkLibraryAddresses["contracts/base/Poseidon.sol:PoseidonT3Lib"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LinkableIncrementalBinaryTree> {
    return super.deploy(
      overrides || {}
    ) as Promise<LinkableIncrementalBinaryTree>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LinkableIncrementalBinaryTree {
    return super.attach(address) as LinkableIncrementalBinaryTree;
  }
  override connect(signer: Signer): LinkableIncrementalBinaryTree__factory {
    return super.connect(signer) as LinkableIncrementalBinaryTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinkableIncrementalBinaryTreeInterface {
    return new utils.Interface(_abi) as LinkableIncrementalBinaryTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinkableIncrementalBinaryTree {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LinkableIncrementalBinaryTree;
  }
}

export interface LinkableIncrementalBinaryTreeLibraryAddresses {
  ["contracts/base/Poseidon.sol:PoseidonT3Lib"]: string;
}
