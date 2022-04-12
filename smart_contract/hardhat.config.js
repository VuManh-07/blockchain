// https://eth-ropsten.alchemyapi.io/v2/ekYK43rkEXMgT77oLoIn2qQaI3nRninI

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ekYK43rkEXMgT77oLoIn2qQaI3nRninI',
      accounts: ['3fb3785148b59108e60dd619617566e9b04f110e0e7aaa737d4504d167fef196']
    }
  }
}