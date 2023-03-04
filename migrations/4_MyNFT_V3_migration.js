const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const MyNFTV2 = artifacts.require('MyNFTV2');
const MyNFTV3 = artifacts.require('MyNFTV3');

module.exports = async function (deployer) {
    const existing = await MyNFTV2.deployed();
    console.log('Existing Contract', existing.address);
    const instance = await upgradeProxy(existing.address, MyNFTV3, { deployer });
    console.log("Upgraded", instance.address);
};
