// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract CredentialEventFacet {
    
 event RequestCredentialsCallback(string list_id, address original_msg_sender, address contractAddr, bytes original_msg_data);

function emitEvent(string memory list_id, address sender, address contractAddr, bytes memory data) public {
    // notice the msg data from the original call is being sent, so that we can extract the original function name and params
    // this doesnt emit msg.data, but data as passed as param. this param is the msg.data when someFunction was called
    emit RequestCredentialsCallback(list_id, sender, contractAddr, data);
  }

}