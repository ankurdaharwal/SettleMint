const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  var candidateList = ["Ankur","Roderik","Vitalik","Szabo","Finney"];
  var candidatesBytes = [];
  for (var i=0; i < candidateList.length; i++) {
    candidatesBytes.push(web3.utils.fromAscii(candidateList[i]));
  }
  deployer.deploy(Voting, candidatesBytes);
};