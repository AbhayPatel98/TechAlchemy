
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17", 
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/X-y_QWzL4Vyv-7h2XHyRn_lLOUhEoWW3",
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
  }
};

