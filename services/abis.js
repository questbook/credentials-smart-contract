const fs = require("fs");

const oracleContractAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/CredentialEventFacet.sol/CredentialEventFacet.json", "utf8"))["abi"];
const communicationAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/CommunicationFacet.sol/CommunicationFacet.json", "utf8"))["abi"];
const governanceAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/GovernanceFacet.sol/GovernanceFacet.json", "utf8"))["abi"];
const workAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/WorkFacet.sol/WorkFacet.json", "utf8"))["abi"];

module.exports = {
    oracleContractAbi,
    communicationAbi,
    governanceAbi,
    workAbi
}