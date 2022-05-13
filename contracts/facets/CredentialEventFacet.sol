pragma solidity ^0.8.7;

contract CredentialEventFacet {
    
 event RequestCredentialsCallback(string list_id, address original_msg_sender, bytes original_msg_data);

function emitEvent(string memory list_id, address sender, bytes memory data) external {
    // notice the msg data from the original call is being sent, so that we can extract the original function name and params
    // this doesnt emit msg.data, but data as passed as param. this param is the msg.data when someFunction was called
    emit RequestCredentialsCallback(list_id, sender, data);
  }

}