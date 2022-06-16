let computerScore = 0;
let playerScore = 0;
let maxPoints = 5;
let resultsMessage = "";

let choices = ["rock", "paper", "scissors"];
let images = ["https://www.eosworldwide.com/wp-content/uploads/2020/01/Rocks_for_all_simplified.jpg",
"https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
"https://m.media-amazon.com/images/I/31tfpkeODQL._AC_.jpg"];

function playRound(selection) {
    results.hidden = false;
    let computerSelection = computerPlay();

    let [winner, resultsMessage] = checkWinner(selection, computerSelection);
    updateScore(winner);
    results.innerHTML = `<hr>${resultsMessage}<hr>`;

    if (playerScore === maxPoints | computerScore === maxPoints) {
        gameOver.hidden = false;
        if (playerScore === maxPoints) {
            message = "You win!  Do you want to play again?";
        } else if (computerScore === 5) {
            message = "You lose!  Do you want to play again?";
        }
        // gameOver.innerText = message
        playerButtons = document.querySelectorAll(".player-selections .selector-button");
        playerButtons.forEach(button => {
            button.disabled = true;
        });
    }
 
    
}

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    let image = images[randomIndex];

    document.querySelector(".computer-button").innerHTML = `<img src=${image}>`
    return randomChoice
}

function checkWinner(player, computer) {
    if (computer === player) {
        message = `You both picked ${computer}. That's a draw!`;
        return ["draw", message];
    } else if (computer === "rock") {
        if (player === "scissors") {
            message = `Rock beats scissors.  You lose!`;
            return ["computer", message];
        } else if (player === "paper") {
            message = `Paper beats rock.  You win!`;
            return ["player", message];
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            message = `Scissors beats paper.  You win!`;
            return ["player", message];
        } else if (player === "rock") {
            message = `Paper beats rock.  You lose!`;
            return ["computer", message];
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            message = `Rock beats scissors.  You win!`;
            return ["player", message];
        } else if (player === "paper") {
            message = `Scissors beats paper.  You lose!`;
            return ["computer", message];
        }
    }
}

function updateScore(winner) {
    let pretext = "";
    if (winner === "player") {
        playerScore += 1;
        pretext = "You won that hand!";
    } else if (winner === "computer") {
        computerScore += 1;
        pretext = "You lost that hand!";
    } else {
        pretext = "That's a draw";
    }
    playerScoreElement.innerText = `Player score: ${playerScore}`
    computerScoreElement.innerText = `Computer score: ${computerScore}`
}

const selection = document.querySelectorAll(".selector-button");

selection.forEach(button => {
    button.addEventListener("click", () => {
        // button.style.boxShadow = "10px 10px 10px grey";
        playRound(button.value);
    });
});

results = document.querySelector(".results");
playerScoreElement = document.querySelector(".player-score");
computerScoreElement = document.querySelector(".computer-score");
gameOver = document.querySelector(".game-over");

document.querySelector(".restart").addEventListener("click", function () {
    console.log("clicked");
    playerButtons = document.querySelectorAll(".player-selections .selector-button");
        playerButtons.forEach(button => {
            button.disabled = false;
        });
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.innerText = `Player score: ${playerScore}`
    computerScoreElement.innerText = `Computer score: ${computerScore}`
    gameOver.hidden = true;
    results.hidden = true;
});