require("dotenv").config();
const {getUsersInList} = require("./usersApi");
const { hre, ethers } = require("hardhat");
const oracleAddr = process.env.ORACLE_ADDRESS;
// const provider = new ethers.providers.WebSocketProvider(process.env.NETWORK_RPC_URL);
const provider = new ethers.providers.getDefaultProvider('http://127.0.0.1:8545/');
const fs = require("fs");
const oracleContractAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/CredentialEventFacet.sol/CredentialEventFacet.json", "utf8"))["abi"];
const coomAbi = JSON.parse(fs.readFileSync("./artifacts/contracts/facets/CommunicationFacet.sol/CommunicationFacet.json", "utf8"))["abi"];
const abiCoder = new ethers.utils.AbiCoder();
const interface = new ethers.utils.Interface(coomAbi);


exports.oracle = async () =>{ 

let privateKey = process.env.PRIVATE_KEY;
let wallet = new ethers.Wallet(privateKey, provider);
let contract = new ethers.Contract(oracleAddr, oracleContractAbi, wallet)

contract.on("RequestCredentialsCallback", async (list_id, msg_sender, msg_data, event)=>{

    const firstValue = ethers.utils.hexDataSlice(msg_data, 0,4);
    const secondValue = ethers.utils.hexDataSlice(msg_data, 32, 64);
    const functionName = interface.getFunction(firstValue).name;

    const contractAddress = event.address;
    console.log('Contract>>', contractAddress);

    const dataParams = await abiCoder.decode([ 'string', 'string'], ethers.utils.hexDataSlice(msg_data, 4));
    const forAuthUsers = functionName+ "_authorized";
    const forUnAuthUsers = functionName + "_unauthorized";
    const contractByteCode = event.data; 
    const CallFunction = new ethers.Contract(contractAddress, coomAbi);

    const users = await getUsersInList(list_id);
    if(msg_sender in users){
        console.log('User is authorized')
    //   const CallFunction = new ethers.Contract(contractAddress, coomAbi);
    //   const proof = []; //we'll create proofs later
    //   await C[forAuthUsers](params, proof); // need to use a signer for this
    }else{
        // await C[forUnAuthUsers];
        console.log('User is unauthorized')
    }

  });
}
