const getComputerChoice = () => {
    let result = Math.round(Math.random() * 10) % 3;
    if (result === 0) return "Rock";
    else if(result === 1) return "Paper";
    else return "Scissors";
}

const res = getComputerChoice();
console.log(`Computer Choice: ${res}`);