const fs = require("fs");

const oracleContractAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/CredentialEventFacet.sol/CredentialEventFacet.json", "utf8"))["abi"];

module.exports = {
    oracleContractAbi
}