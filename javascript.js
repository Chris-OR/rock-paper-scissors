let winner;
let playerScore = 0;
let computerScore = 0;

function game() {
    while (playerScore < 3 && computerScore < 3) {
        let winner = playRound();
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        console.log(`The score in this best of 5 is:\nplayer: ${playerScore} computer: ${computerScore}`)
    }
    if (playerScore === 3) {
        console.log("Congrats!  You have outsmarted the computers... for now")
    } else {
        console.log("You lost!!  The computer uprising is beginning...")
    }
}

function playRound() {
    let computerSelection = computerPlay();

    let playerSelection = false;
    while (!playerSelection) {
        playerSelection = playerPlay();
    }

    return(checkWinner(computerSelection, playerSelection));
    
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}

function playerPlay() {
    choice = prompt("Please enter your choice (rock, paper, or scissors)").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice
    } else {
        console.log("Please try again.  You may choose only rock, paper, or scissors.")
    }
}

function checkWinner(computer, player) {
    if (computer === player) {
        console.log(`You both picked ${computer}. That's a draw!`)
        return "draw";
    } else if (computer === "rock") {
        if (player === "scissors") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You lose!`);
            return "computer";
        } else if (player === "paper") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You win!`);
            return "player";
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You win!`);
            return "player";
        } else if (player === "rock") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You lose!`);
            return "computer";
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You win!`);
            return "player";
        } else if (player === "paper") {
            console.log(`You picked ${player} and the computer picked ${computer}.  You lose!`);
            return "computer";
        }
    }
}

game()



