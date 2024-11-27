function getComputerChoice() {

    let computerChoice = Math.random()
    if (computerChoice <=0.25) {
        return "rock";
    } 
    else if (computerChoice >=0.5) {
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
let humanScore=0;
let computerScore=0;
function playRound( humanChoice, computerChoice ) {
    
    if (humanChoice === computerChoice) {
        console.log(`It's a Tie!, both players chose ${humanChoice}`);
    }
else if ((humanChoice === "rock" && computerChoice === "scissors") ||
 (humanChoice === "scissors" && computerChoice ==="paper") ||
  (humanChoice === "paper" && computerChoice === "rock")) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++
  }
  else {
    console.log( `You Loose! ${computerChoice} beats ${humanChoice}`)
    computerScore++
  }

}



function playGame() {
    for (i=0; i<5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human Score ${humanScore}, Computer Score ${computerScore}` );

    }
        




    if ( humanScore > computerScore) {
        console.log("CONGRATULATION, YOU WIN!");
    }
    else if (computerScore > humanScore) {
    
        console.log("YOU LOOSE!");
    }
    else { 
        console.log("YOU TIE!");
    }

}



playGame();

