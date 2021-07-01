function computerPlay(){
    // pick random object
    const selection = Math.floor(Math.random()*3);
    let result;
    switch (selection) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
    }
    console.log(result);
    return result;
}

console.log(playRound());
// computerPlay();



function promptPlayer(){
    // prompt player for selection
    let selection;
    while (selection != 'rock' && selection != 'paper' && selection != 'scissors'){
        selection = prompt("Select 'rock', 'paper', or 'scissors'");
        selection = selection.toLowerCase();
    }
    console.log(selection);
    return selection;
}

function playRound(){
    let playerChoice = promptPlayer();
    let computerChoice = computerPlay();
    // determine winner and return result
    if (playerChoice === "rock") {
        if (computerChoice == "rock"){
            alert("You and the computer both picked rock! No points!");
            return "tie";
        } else if (computerChoice = "paper"){
            alert("Computer picked 'paper', you lose with rock!");
            return "player loss";
        } else if (computerChoice = "scissors"){
            alert("Computer picked 'scissors', you win with rock!");
            return "player win";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice == "paper"){
            alert("You and the computer both picked paper! No points!");
            return "tie";
        } else if (computerChoice == "rock"){
            alert("Computer picked 'rock', you win with paper!");
            return "player win";
        } else if (computerChoice = "scissors"){
            alert("Computer picked 'scissors', you lose with paper!");
            return "player loss";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice == "scissors"){
            alert("You and the computer both picked scissors! No points!");
            return "tie";
        } else if (computerChoice == "rock"){
            alert("Computer picked 'rock', you lose with scissors!");
            return "player loss";
        } else if (computerChoice = "paper"){
            alert("Computer picked 'paper', you win with scissors!");
            return "player win";
        }
    }
}

function game(){
    let numberOfRounds = 0;
    let playerScore = 0;
    let computerScore = 0;
}