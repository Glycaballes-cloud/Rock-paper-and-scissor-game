// Rock paper and scissor
const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

// MAIN GAME FUNCTION
function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++; // ✅ ADD PLAYER SCORE
    } 
    else {
        result = "Computer wins!";
        computerScore++; // ✅ ADD COMPUTER SCORE
    }

    // Update text
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Update score in HTML
    updateScore();

    // Update color
    updateResultColor(result);
}

// COLOR HANDLER
function updateResultColor(result) {
    switch (result) {
        case "You win!":
            resultDisplay.style.color = "cyan";
            break;

        case "Computer wins!":
            resultDisplay.style.color = "pink";
            break;

        default:
            resultDisplay.style.color = "yellow";
    }
}

// SCORE UPDATE FUNCTION
function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
