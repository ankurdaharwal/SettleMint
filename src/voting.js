/**********************************
         Voting POC Challenge
    ==============================
    Module  : voting.js
    Authors : Ankur Daharwal
    Version : 0.1
    License : MIT
    Date    : 04/06/2019
**********************************/

// const rpcURL = "https://ropsten.infura.io/YOUR_INFURA_API_KEY";

const abi = require('../build/abi/Voting.js')
const Web3 = require('web3');
const rpcURL = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(rpcURL);

const address = '0xc617f232739c6f34787e842ab872a618b33d569b'; // Insert New Contract Address Here
const contract = new web3.eth.Contract(abi,address);

function vote(candidate) {
    return new Promise((resolve, reject) => {
        contract.methods.voteForCandidate(web3.utils.fromAscii(candidate)).call()
        .then((hash) => {
            return resolve(hash);
        });        
    });
}

function totalVotes(candidate) {
    return new Promise((resolve, reject) => {
        contract.methods.totalVotesFor(web3.utils.fromAscii(candidate)).call()
        .then((votes) => {
            return resolve(votes);
        });
    });
}

function validate(candidate) {
    return new Promise((resolve, reject) => {
        contract.methods.validCandidate(web3.utils.fromAscii(candidate)).call()
        .then((validity) => {
            return resolve(validity);
        });
    });
}

module.exports = {
    vote: vote,
    validate: validate,
    totalVotes: totalVotes
}