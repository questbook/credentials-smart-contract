pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./GateableFacet.sol";

contract CommunicationFacet is Ownable, GateableFacet {

constructor(address _credentialOracle) GateableFacet(_credentialOracle) {
}
function setInboxPriceForCredential(string memory someParam) external {

} 

function postVibe(string memory someParam, string memory _listId) has_credential(_listId) external {

}

function postVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function postVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function upVoteVibe(string memory someParam, string memory _listId) has_credential(_listId) external {

}

function upVoteVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function upVoteVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function downVoteVibe(string memory someParam, string memory _listId) has_credential(_listId) external {

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