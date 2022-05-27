# Credential Project
Credentials for developers using their Git account and contributions to Open Source projects

## Start the Hardhat local node
```
npx hardhat node
```

## Start Oracle
To start the oracle service that listens to contract event simply run
```
npm run dev
```
## Deploy Contracts
Deploy the contracts and copy only the CommunicationFacet contract address for this test purpose. Paste in the env file
```
npx hardhat run --network localhost scripts/deploy.js
```
OR
use metamask to deploy and interact with the contract from metamask. Don't forget to deploy the CredentialEventFacet.sol first and deploy the CommunicationFacet with it.

 CredentialEvent: 0xA80dE0d5Ade3Ae57Df8a47C1Ac656070ca7324a7 
 Communication: 0x5807c522a9F91a44E0c39F990eB403E553C32E70 
 Governance: 0xB0f1E505eF8e073EfC2a27D601d32dd07470B38e 
 Work: 0x5743DE8eb2B34AEB32658108d2cD476C53385Ca0




