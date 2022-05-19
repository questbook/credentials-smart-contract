const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Call a Function", function () {
  let communication;

  beforeEach(async function () {
    // const communication = await ethers.getContractFactory("CredentialEventFacet");
    communication = await ethers.getContractAt("CommunicationFacet", process.env.ORACLE_ADDRESS);

  })
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should call a function from one of the contract", async ()=>{
    const callFunction = await communication.postVibe("1", "python");
    await callFunction.wait();
  })
});
