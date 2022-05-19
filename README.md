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




