const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
let playerWins = 0
let computerWins = 0

document.getElementById("rock").addEventListener('click', () => playGame("rock"));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!"
    }
    return "You lose!"
}

function displayResult(playerChoice, computerChoice, result) {
    resultDiv.innerHTML = `You chose: ${playerChoice}<br>Computer chose: ${computerChoice}<br>${result}`;
}

function updateScores(winner) {
    if (winner === "You Win!") {
        playerWins++;
    }
    if (winner === "You lose!") {
        computerWins++;
    }

    document.getElementById('playerWins').innerText = 'Player: ' + playerWins;
    document.getElementById('computerWins').innerText = 'Computer: ' + computerWins;
}

function displayScore(playerWins, computerWins) {
    console.log(playerWins);
    console.log(computerWins)
    
}