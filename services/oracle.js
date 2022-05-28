require("dotenv").config();
let alert = require('alert'); 
const {getUsersInList} = require("./usersApi");
const { ethers } = require("hardhat");
const {oracleContractAbi, communicationAbi, governanceAbi, workAbi} = require("./abis");

const oracleAddr = process.env.ORACLE_ADDRESS;
const provider = new ethers.providers.InfuraProvider("rinkeby", {projectId: process.env.NETWORK_RPC_ID, projectSecret: process.env.NETWORK_RPC_KEY});
const abiCoder = new ethers.utils.AbiCoder();
// let wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(oracleAddr, oracleContractAbi, provider);
let paramArray = [];
let response;

exports.oracle = async () =>{ 
  
contract.on("RequestCredentialsCallback", async (list_id, msg_sender, contractAddress, funcName, msg_data)=>{
    const bytecode = await provider.getCode(contractAddress);
    paramArray = await abiCoder.decode(['string','string'], ethers.utils.hexDataSlice(msg_data, 4));
    const forAuthUsers = funcName+ "_authorized";
    const forUnAuthUsers = funcName + "_unauthorized";
    // const callFunction = new ethers.Contract(contractAddress, bytecode, provider);

    const users = await getUsersInList(paramArray[1]);
    const findUser = users.find(user => user.username === paramArray[0]);
    if(findUser){
        response = 'User is authorized \n  Function Name: '+forUnAuthUsers+' \n Contract Address: '+contractAddress+'\n List_id -'+ paramArray[1]+'\n Param -'+ paramArray[0] ;
    //   const proof = []; //we'll create proofs later
    //   await callFunction.forAuthUsers(params, proof); // need to use a signer for this
    }else{
        
        response = 'User is unauthorized \n  Function Name: '+forUnAuthUsers+' \n Contract Address: '+contractAddress+'\n List_id:'+ paramArray[1]+'\n Param:'+ paramArray[0];
        // await callFunction.forUnAuthUsers(params);
    }
    
  });
  return response;
}
