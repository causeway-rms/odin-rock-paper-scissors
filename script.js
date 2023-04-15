const gameOptions = ['rock', 'paper', 'scissors'];

let computerSelection;
let playerSelection;
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const playerSelectionDisplay = document.querySelector('#user-choice');
const computerSelectionDisplay = document.querySelector('#computer-choice');
const roundResultDisplay = document.querySelector('#round-result');
const currentScoreDisplay = document.querySelector('#current-score');
const finalScoreDisplay = document.querySelector('#final-score');

function getComputerChoice() {
    computerSelection = gameOptions[Math.floor(Math.random()*3)];
    return computerSelection;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
            const playerSelection = button.id;
            playerSelectionDisplay.textContent = "You play: " + playerSelection;
            const computerSelection = getComputerChoice();
            computerSelectionDisplay.textContent = "Computer plays: " + computerSelection;
            const roundResult = playRound(playerSelection, computerSelection);
            roundResultDisplay.textContent = roundResult;
        }
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                finalScoreDisplay.textContent = "You win the game!"
            }
            else {
                finalScoreDisplay.textContent = "You lose the game!"
            }
            buttons.forEach(button => button.disabled = true);
        }
    })    
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore = humanScore + 0;
        computerScore = computerScore + 0;
        currentScoreDisplay.textContent = 'Current Score: You - ' + humanScore + ' | Computer - ' + computerScore;
        return ('It is a tie. You both played: ' + humanChoice);     
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore = humanScore + 1;
        computerScore = computerScore + 0;
        currentScoreDisplay.textContent = 'Current Score: You - ' + humanScore + ' | Computer - ' + computerScore;
        return ('You win! ' + humanChoice + " beats " + computerChoice);
    }
    else {
        humanScore = humanScore + 0;
        computerScore = computerScore + 1;
        currentScoreDisplay.textContent = 'Current Score: You - ' + humanScore + ' | Computer - ' + computerScore;
        return ('Computer wins! ' + computerChoice + " beats " + humanChoice);
    }
}
