// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract CredentialEventFacet {
    
 event RequestCredentialsCallback(string list_id, address original_msg_sender, address contractAddr, string funcName, bytes original_msg_data);

function emitEvent(string memory _list_id, address _sender, address _contractAddr, string memory _funcName, bytes memory _data) public {
    // notice the msg data from the original call is being sent, so that we can extract the original function name and params
    // this doesnt emit msg.data, but data as passed as param. this param is the msg.data when someFunction was called
    emit RequestCredentialsCallback(_list_id, _sender, _contractAddr, _funcName, _data);
  }

}