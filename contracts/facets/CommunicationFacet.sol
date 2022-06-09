
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./GateableFacet.sol";

contract CommunicationFacet is Ownable, GateableFacet {
constructor(CredentialEventFacet _credentialOracle) GateableFacet(_credentialOracle) {
}

function postVibe(string memory someParam, string memory _listId, string memory thirdparam, uint256 num, uint32[] memory _good) has_credential(address(this)) external {
}

function postVibe_authorised(string memory someParam, bytes[] memory proof) credentialCallback external {
  //authenticated logic...
}

function postVibe_unauthorised(string memory someParam) credentialCallback external {
  //unauthenticated logic ...
}

}