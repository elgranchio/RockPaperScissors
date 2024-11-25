function getComputerChoice() {

    let computerChoice = Math.random()
    if (computerChoice <=0.5) {
        return "rock";
    } 
    else if (computerChoice >=0.6) {
return "paper";}
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissors").toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    }
    else { console.log("please enter a valid choice");
        return null;

    }
}
let humanScore = 0;
let computerScore = 0;

function playRound( humanChoice, computerChoice ) {
    let result;


}

