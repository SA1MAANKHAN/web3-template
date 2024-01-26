const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const NemoLand = artifacts.require("NemoLand");
const NemoLandV2 = artifacts.require("NemoLandV2");

module.exports = async function (deployer) {
    // const existing = await NemoLand.deployed();
    const instance = await upgradeProxy(process.env.GOERLI_DEPLOYED_CONTRACT_ADDRESS, NemoLandV2, {
        deployer,
    });
    console.log("Upgraded", instance.address);
};
