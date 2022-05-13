pragma solidity 0.8.7;

import "./GateableFacet.sol";

contract WorkFacet is GateableFacet {

constructor(address _credentialOracle) GateableFacet(_credentialOracle) {
}

function acceptWorkStream(string memory someParam, string memory _listId) has_credential(_listId) external {

}

function acceptWorkStream_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function acceptWorkStream_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function abandonWorkStream() external {}


function broadcastAvailability(string memory someParam) external {

}

function postWorkStream(string memory someParam) external{

}

function acceptWorkStream(string memory someParam) external{

}
}