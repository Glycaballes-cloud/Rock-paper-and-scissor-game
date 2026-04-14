// Rock paper and scissor
const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
               (playerChoice === "paper" && computerChoice === "rock") ||
               (playerChoice === "scissor" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

     updateResultColor(result);
}
function updateResultColor(result) {
    switch (result) {
        case "You win!":
            resultDisplay.style.color =
                rootStyles.getPropertyValue("--nebula-cyan");
            break;

        case "Computer wins!":
            resultDisplay.style.color =
                rootStyles.getPropertyValue("--nebula-pink");
            break;

        default:
            resultDisplay.style.color =
                rootStyles.getPropertyValue("--star-yellow");
    }
}

