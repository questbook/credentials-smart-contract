pragma solidity 0.8.7;

import "./GateableFacet.sol";

contract GovernanceFacet is GateableFacet {

constructor(address _credentialOracle) GateableFacet(_credentialOracle) {
}

function reviewApplication(string memory someParam, string memory _listId) has_credential(_listId) external {

}

function reviewApplication_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function reviewApplication_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 

function raiseNoConfidenceMotion(string memory someParam, string memory _listId) has_credential(_listId) external {

}

function raiseNoConfidenceMotion_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function raiseNoConfidenceMotion_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
} 
}