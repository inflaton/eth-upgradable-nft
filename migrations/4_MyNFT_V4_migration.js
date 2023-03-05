const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const MyNFTV3 = artifacts.require('MyNFTV3');
const MyNFTV4 = artifacts.require('MyNFTV4');

module.exports = async function (deployer) {
    const existing = await MyNFTV3.deployed();
    console.log('Existing Contract', existing.address);
    const instance = await upgradeProxy(existing.address, MyNFTV4, { deployer });
    console.log("Upgraded", instance.address);
};
