require("dotenv").config();
const {getUsersInList} = require("./usersApi");
const { ethers } = require("hardhat");
const {oracleContractAbi, communicationAbi, governanceAbi, workAbi} = require("./abis");

const oracleAddr = process.env.ORACLE_ADDRESS;
const provider = new ethers.providers.InfuraProvider("rinkeby", {projectId: process.env.NETWORK_RPC_ID, projectSecret: process.env.NETWORK_RPC_KEY});
const abiCoder = new ethers.utils.AbiCoder();
const interface = new ethers.utils.Interface(communicationAbi);

exports.oracle = async () =>{ 
// let wallet = new ethers.Wallet(privateKey, provider);
let contract = new ethers.Contract(oracleAddr, oracleContractAbi, provider)

contract.on("RequestCredentialsCallback", async (list_id, msg_sender, msg_data, event)=>{
   
    const bytecode = await provider.getCode(oracleAddr);
    let arrayPut = [];
     arrayPut = await abiCoder.decode(['string','string', 'string', 'int'], ethers.utils.hexDataSlice(msg_data, 4));

    const getFuncName = ethers.utils.hexDataSlice(msg_data, 0,4);
    const funcName = interface.getFunction(getFuncName).name;

    const contractAddress = event;

    const forAuthUsers = funcName+ "_authorized";
    const forUnAuthUsers = funcName + "_unauthorized";
    // const contractByteCode = event.data; 
    // const CallFunction = new ethers.Contract(contractAddress, coomAbi);

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
