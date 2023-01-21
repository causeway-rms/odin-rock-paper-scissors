const gameOptions = ['rock', 'paper', 'scissors'];
let computerChoice;
function getComputerChoice() {
    computerChoice = gameOptions[Math.floor(Math.random()*3)];
    return computerChoice;
}
console.log(getComputerChoice());