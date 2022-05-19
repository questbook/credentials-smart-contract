const hre = require("hardhat");

async function main() {
  // We get the contract to deploy

  const CredentialEventFacet = await hre.ethers.getContractFactory("CredentialEventFacet");
  const CommunicationFacet = await hre.ethers.getContractFactory("CommunicationFacet");
  const GovernanceFacet = await hre.ethers.getContractFactory("GovernanceFacet");
  const WorkFacet = await hre.ethers.getContractFactory("WorkFacet");
  const credential = await CredentialEventFacet.deploy();
  const communication = await CommunicationFacet.deploy(credential.address);
  const governance = await GovernanceFacet.deploy(credential.address);
  const work = await WorkFacet.deploy(credential.address);

  await credential.deployed();
  await communication.deployed();
  await governance.deployed();
  await work.deployed();

  console.log("Contracts Deployed: \n CredentialEvent:", credential.address, "\n Communication:", communication.address, "\n Governance:", governance.address, "\n Work:", work.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
