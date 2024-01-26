var Contract = artifacts.require("token");


module.exports = async function (deployer) {
    
   const token = await deployer.deploy(Contract);
   console.log(token.address);
   console.log(token);
   
};