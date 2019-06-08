/**********************************
         Voting POC Challenge
    ==============================
    Module  : main.js
    Authors : Ankur Daharwal
    Version : 0.1
    License : MIT
    Date    : 04/06/2018
**********************************/

import { vote, validate, totalVotes } from "./src/voting";

/*** Populate Drop Down List ***/

window.populateList = function () {
    var candidateList = ["Ankur", "Roderik", "Vitalik", "Szabo", "Finney", "Lucifer"]    
    var candidate = document.getElementById("candidate");
    var option;
    for (var i=0; i < candidateList.length ; i ++ ) {
        option = document.createElement("option");
        option.text = candidateList[i];
        candidate.add(option);
        // console.log("Candidate No. " + i + " Added: "+candidateList[i]);
    }
}

/*** Vote a Candidate ***/

window.castVote = async function () {
    var candidate = document.getElementById("candidate").value;
    if(await validateCandidate()){        
        console.log("Voting for Candidate: " + candidate);
        console.log(await vote(candidate));
        alert("Voted for " + candidate);
        alert("Please wait till the transaction is confirmed in the Blockchain!");
        await getTotalVotes(candidate);
    }
}

var getTotalVotes = async function (c) {
    const totalVote = await totalVotes(c);
    document.getElementById("result").value = "Total Votes for "+ c +": " + totalVote;
}

/*** Validate a Candidate ***/

var validateCandidate = async function () {
    var candidateVal = document.getElementById("candidate").value.trim();
    if (candidateVal==-1) { 
        alert('Please Select a Candidate First!');
        document.getElementById("result").value = "  No Candidate Selected";
        return false;
    }
    try {
        const isVal = await validate(candidate.value);
        if (isVal) {
            document.getElementById("result").value = "  Valid Candidate";
        } else if (!isVal) {
            document.getElementById("result").value = "  Invalid Candidate"; 
        }
    } catch (error) {
        console.log(error);
    }
    // console.log("Result: " + document.getElementById("result").value);
    if(document.getElementById("result").value == "  Valid Candidate"){
        return true;
    } else return false;
}