const gameOptions = ['rock', 'paper', 'scissors'];

let computerSelection;
let playerSelection;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerSelection = gameOptions[Math.floor(Math.random()*3)];
    console.log('Computer plays: ' + computerSelection);
    return computerSelection;
}

function getUserChoice() {
    playerSelection = prompt('Enter your choice: rock, paper, or scissors')
    playerSelection = playerSelection.toLowerCase();
    console.log('You play: ' + playerSelection);
    return playerSelection;
}

function singleRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            humanScore = humanScore + 0;
            computerScore = computerScore + 0;
            return ('It is a tie. You both played Rock.');
        }
        else if (computerChoice === 'paper') {
            humanScore = humanScore + 0;
            computerScore = computerScore + 1;
            return ('Computer wins! Paper beats Rock!');
        }
        else {
            humanScore = humanScore + 1;
            computerScore = computerScore + 0;
            return ('You win! Rock beats Scissors');
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore = humanScore + 1;
            computerScore = computerScore + 0;
            return ('You win! Paper beats Rock!');
        }
        else if (computerChoice === 'paper') {
            humanScore = humanScore + 0;
            computerScore = computerScore + 0;
            return ('It is a tie. You both plated Paper.');
        }
        else {
            humanScore = humanScore + 0;
            computerScore = computerScore + 1;
            return ('Computer wins! Scissors beat Paper!');
        }
    }
    else {
        if (computerChoice === 'rock') {
            humanScore = humanScore + 0;
            computerScore = computerScore + 1;
            return ('Computer wins! Rock beats Scissors!');
        }
        else if (computerChoice === 'paper') {
            humanScore = humanScore + 1;
            computerScore = computerScore + 0;
            return ('You win! Scissors beat Paper!');
        }
        else {
            humanScore = humanScore + 0;
            computerScore = computerScore + 0;
            return ('It is a tie. You both played Scissors.')
        }
    }
    }

console.log(singleRound(getUserChoice(),getComputerChoice()));