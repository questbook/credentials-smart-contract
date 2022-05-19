// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./CredentialEventFacet.sol";

contract GateableFacet {


    address private CREDENTIAL_ORACLE;
    CredentialEventFacet public CREDENTIAL_EVENT;


// this modifier can be used by functions that want to give access to users only if they have a certain credential
modifier has_credential(string memory list_id) {
	CREDENTIAL_EVENT.emitEvent(list_id, msg.sender, msg.data);
    _;
}

// callback functions are called by the oracle after doing the credentials validation
// there will be 2 callbacks _authorised(...param) and _unauthorised(...param)
modifier credentialCallback {
  require(msg.sender == CREDENTIAL_ORACLE, "Credential CallBack: Only the oracle can call this function");
  _;
}

constructor(CredentialEventFacet _credentialOracle) {
    CREDENTIAL_ORACLE = address(_credentialOracle);
    CREDENTIAL_EVENT = _credentialOracle;
}


}
