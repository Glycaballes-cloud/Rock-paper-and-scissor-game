const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const winnerDisplay = document.getElementById("winnerDisplay");
const restartBtn = document.getElementById("restartBtn");
const scoreLimitSelect = document.getElementById("scoreLimit");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// ✅ Dynamic winning score
let WIN_SCORE = parseInt(scoreLimitSelect.value);

// ✅ Update score limit when changed
scoreLimitSelect.addEventListener("change", () => {
  WIN_SCORE = parseInt(scoreLimitSelect.value);
  restartGame();
});

// ✅ MAIN GAME
function play(playerChoice) {
  if (gameOver) return;

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
    playerScore++;
  } 
  else {
    result = "Computer wins!";
    computerScore++;
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  updateScore();
  updateResultColor(result);
  checkWinner(); // ✅ check for winner
}

// ✅ COLOR HANDLER
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

// ✅ UPDATE SCORE
function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// ✅ WINNER CHECK
function checkWinner() {
  if (playerScore === WIN_SCORE) {
    winnerDisplay.textContent = `🎉 YOU WON! (First to ${WIN_SCORE})`;
    winnerDisplay.style.color = "cyan";
    gameOver = true;
    restartBtn.style.display = "inline-block";
  } 
  else if (computerScore === WIN_SCORE) {
    winnerDisplay.textContent = `💻 COMPUTER WINS! (First to ${WIN_SCORE})`;
    winnerDisplay.style.color = "pink";
    gameOver = true;
    restartBtn.style.display = "inline-block";
  }
}

// ✅ RESTART
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;

  playerDisplay.textContent = "PLAYER:";
  computerDisplay.textContent = "COMPUTER:";
  resultDisplay.textContent = "";
  winnerDisplay.textContent = "";

  updateScore();
  restartBtn.style.display = "none";
}
``
