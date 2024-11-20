let humanScore = 0;
let computerScore =0;

function getCompureChoice() {
    let value=Math.random()
    let choice;

    if (value <=0.5)
    {choice='Paper'}

    else if (value>0.5 && <=1)
        choice {'Rock'}

    else 
    {choice='Scissors'}
    return choice;
}

function getHumanChoice() {
    let input = prompt('Rock, Paper or Scissors?');
    input=input.toLowerCase();
    return input;
}
function playRound(HumanChoice, CompureChoice) {

    if (HumanChoice==='Rock' && CompureChoice==='Scissors'){
        humanScore++;
        alert(`Your Choice:${HumanChoice} Computer Choice: ${CompureChoice} 
            You Win!`);
    }
    else if (HumanChoice==='Rock' && CompureChoice==='Paper'){
        computerScore++;
        alert(`Your Choice: ${HumanChoice} Computer Choice: ${CompureChoice}
            You Loose!`);
    }
    else if (HumanChoice==='Rock' && CompureChoice==='Rock'){
        alert(`Your Choice: ${HumanChoice} Computer Choice: ${CompureChoice}
            You Tie`);
            
    }
else if (HumanChoice==='Scissors' && CompureChoice==='Rock'){
    computerScore++;
    alert(`Your Choice: ${HumanChoice} Computer Choice: ${CompureChoice}
        You Loose!`);
}
else if (HumanChoice==='Scissors' && CompureChoice==='Paper'){
    humanScore++;
    alert(`Your Choice: ${HumanChoice} Computer Choice: ${CompureChoice}
        You Win!`);
}
if else (HumanChoice==='Scissors' && CompureChoice==='Scissors'){
    alert(`Your Choice: ${HumanChoice} Computer Choice: ${CompureChoice}
        You Tie`);  
}
}
