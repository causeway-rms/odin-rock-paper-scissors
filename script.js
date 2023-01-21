const gameOptions = ['rock', 'paper', 'scissors'];

let computerSelection;
let userSelection;

function getComputerChoice() {
    computerSelection = gameOptions[Math.floor(Math.random()*3)];
    return computerSelection;
}

function getUserChoice() {
    userSelection = prompt('Enter your choice: rock, paper, or scissors')
    return userSelection;
}

console.log(getUserChoice());
