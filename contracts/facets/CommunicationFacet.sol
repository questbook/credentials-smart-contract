
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./GateableFacet.sol";

contract CommunicationFacet is Ownable, GateableFacet {
constructor(CredentialEventFacet _credentialOracle) GateableFacet(_credentialOracle) {
}

function setInboxPriceForCredential(string memory someParam) external {

} 

function postVibe(string memory someParam, string memory _listId, string memory _testing) has_credential(_listId, address(this)) external {
}

function postVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function postVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function upVoteVibe(string memory someParam, string memory _listId) has_credential(_listId, address(this)) external {

}

function upVoteVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function upVoteVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function downVoteVibe(string memory someParam, string memory _listId) has_credential(_listId, address(this)) external {

}

function downVoteVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function downVoteVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function settleVibes() external onlyOwner {}

function setUpVibePool() external {}

}