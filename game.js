//Author: Ardit Koti

const getComputerChoice = () => {
    let result = Math.round(Math.random() * 10) % 3;
    if (result === 0) return "Rock";
    else if(result === 1) return "Paper";
    else return "Scissors";
}

const getHumanChoice = () => {
    let res = prompt("Enter either Rock, Paper, or Scissors: ");
    if (res !== "Rock" && res !== "Paper" && res !== "Scissors"){
        console.log("Invalid Input: Try again...");
        return getHumanChoice();
    }
    return res;
}
let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result = document.querySelector('.result');
    let pScore = document.querySelector('.pScore').textContent;
    let cScore = document.querySelector('.cScore').textContent;
    if (humanChoice === computerChoice) console.log("It's a Draw!");
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        pScore++;
        result.textContent = "You win! Rock beats Scissors!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        cScore++;
        result.textContent = "You lose! Paper beats Rock!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        pScore++;
        result.textContent = "You win! Paper beats Rock!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        cScore++;
        result.textContent = "You lose! Scissors beat Paper!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        cScore++;
        result.textContent = "You lose! Rock beat Scissors!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        pScore++;
        result.textContent = "You win! Scissors beat Paper!";
    }
}

const playGame = (rounds) => {
    for(let i =0;  i < rounds; i++){
        const compRes = getComputerChoice();
        const humanRes = getHumanChoice();
        console.log(`Computer Choice: ${compRes}`);
        console.log(`Human Choice: ${humanRes}`);
        playRound(humanRes, compRes); 
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);  
}

