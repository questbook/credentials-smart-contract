require("dotenv").config();
const {getUsersInList} = require("./usersApi");
const { ethers } = require("hardhat");
const {oracleContractAbi, communicationAbi, governanceAbi, workAbi} = require("./abis");

const oracleAddr = process.env.ORACLE_ADDRESS;
const provider = new ethers.providers.InfuraProvider("rinkeby", {projectId: process.env.NETWORK_RPC_ID, projectSecret: process.env.NETWORK_RPC_KEY});
const abiCoder = new ethers.utils.AbiCoder();
// let wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(oracleAddr, oracleContractAbi, provider);

let paramArray = [];

exports.oracle = async () =>{ 

contract.on("RequestCredentialsCallback", async (list_id, msg_sender, contractAddress, funcName, msg_data)=>{
   
    const bytecode = await provider.getCode(contractAddress);
    paramArray = await abiCoder.decode(['string','string'], ethers.utils.hexDataSlice(msg_data, 4));

    const forAuthUsers = funcName+ "_authorized";
    const forUnAuthUsers = funcName + "_unauthorized";
    const callFunction = new ethers.Contract(contractAddress, bytecode);

    const users = await getUsersInList(list_id);
    if(msg_sender in users){
        alert('User is authorized \n','Function Name:', forAuthUsers,'\n Contract Address:', contractAddress,'\n Data:', paramArray);
    //   const proof = []; //we'll create proofs later
    //   await callFunction.forAuthUsers(params, proof); // need to use a signer for this
    }else{
        alert('User is unauthorized \n','Function Name:', forAuthUsers,'\n Contract Address:', contractAddress)
        // await callFunction.forUnAuthUsers(params);
    }

  });
}
