require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

const mnemonic = '';

module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    mainnet: {
      url: "https://eth.llamarpc.com",
      chainId: 1,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        inittialIndex: 1,
        count: 10,
      },
    },
  }
};
