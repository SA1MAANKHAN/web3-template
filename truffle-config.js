require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const private_key = process.env.PRIVATE_KEY;
const infura_rinkeby_link = process.env.RINKEBY_RPC_URL;
const infura_goerli_link = process.env.GOERLI_RPC_URL;
const infura_sepolia_link = process.env.SEPOLIA_RPC_URL
const infura_mainnet_link = process.env.MAINNET_RPC_URL;
const etherscan_api_key = process.env.ETHERSCAN_API_KEY;
const ganache_rpc_link = process.env.GANACHE_RPC;
const ganache_key = process.env.GANACHE_KEY;
const beam_testnet_link = process.env.BEAM_TESTNET_RPC_URL;

module.exports = {
  networks: {
    beam_testnet:{
      provider: () => new HDWalletProvider(private_key, beam_testnet_link),
      network_id: 13337,
      gas: 5500000, 
      confirmations: 0, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: () => new HDWalletProvider(private_key, infura_rinkeby_link),
      network_id: 4, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
      confirmations: 0, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    goerli: {
      provider: () => new HDWalletProvider(private_key, infura_goerli_link),
      network_id: 5, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
      confirmations: 0, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    sepolia: {
      provider: () => new HDWalletProvider(private_key, infura_sepolia_link),
      network_id: 11155111, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
      confirmations: 0, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    live: {
      provider: () => new HDWalletProvider(private_key, infura_mainnet_link),
      network_id: 1, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false, // Skip dry run before migrations? (default: false for public nets )
    },
    dev: {
      provider: () => new HDWalletProvider(ganache_key, ganache_rpc_link),
      network_id: 1667284291131, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1,
        },
        // evmVersion: "byzantium",
        evmVersion: "istanbul",
        
      },
    }
  },
  plugins: ["truffle-plugin-verify", "truffle-contract-size"],
  api_keys: {
    etherscan: etherscan_api_key,
  },
};
