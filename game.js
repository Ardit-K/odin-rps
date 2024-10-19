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

const compRes = getComputerChoice();
const humanRes = getHumanChoice();
console.log(`Computer Choice: ${compRes}`);
console.log(`Human Choice: ${humanRes}`);
