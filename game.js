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

const restart = () => {
    humanScore = 0;
    computerScore = 0;
    document.querySelector('.pScore').textContent = 0;
    document.querySelector('.cScore').textContent = 0;
    document.querySelector('.result').textContent = "";
    document.querySelector('.message').textContent = "";
}
const playRound = (humanChoice, computerChoice) => {
    let winner = document.querySelector('.message');
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result = document.querySelector('.result');
    let pScore = document.querySelector('.pScore');
    let cScore = document.querySelector('.cScore');
    if (humanChoice === computerChoice) console.log("It's a Draw!");
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        pScore.textContent = humanScore;
        result.textContent = "You win! Rock beats Scissors!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        cScore.textContent = computerScore;
        result.textContent = "You lose! Paper beats Rock!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        pScore.textContent = humanScore;
        result.textContent = "You win! Paper beats Rock!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        cScore.textContent = computerScore;
        result.textContent = "You lose! Scissors beat Paper!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        cScore.textContent = computerScore;
        result.textContent = "You lose! Rock beat Scissors!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        pScore.textContent = humanScore;
        result.textContent = "You win! Scissors beat Paper!";
    }

    if(humanScore === 5){
        winner.textContent = "You win!";
    }
    else if(computerScore === 5){
        winner.textContent = "Computer Wins!";
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

