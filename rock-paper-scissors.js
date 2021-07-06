const choices = document.querySelectorAll('.playerSelect');
choices.forEach(button => {
    button.addEventListener('click', playerSelectionMade)
});
let numberOfRounds = 0;
let playerScore = 0;
let computerScore = 0;

function playerSelectionMade(e){
    const roundResult = playRound(e.target.id);
    const roundResultContainer = document.querySelector('#roundResult');
    roundResultContainer.textContent = roundResult;
    document.querySelector('#playerScore').textContent = `Player score: ${playerScore}`;
    document.querySelector('#computerScore').textContent = `Computer score: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore === 5){
            roundResultContainer.append('  Game Over, You win!    ');
        } else if (computerScore === 5){
            roundResultContainer.append('  Game Over, Computer wins!    ')
        }
        const newGameButton = document.createElement('button');
        newGameButton.textContent = 'reset game?'
        newGameButton.id = 'resetGame'
        newGameButton.addEventListener('click', gameReset);
        // disable choice buttons until a new game is started
        choices.forEach(button => {
            button.removeEventListener('click', playerSelectionMade);
        })
        roundResultContainer.appendChild(newGameButton);
        
    }

}

function gameReset(){
    numberOfRounds = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#playerScore').textContent = '';
    document.querySelector('#computerScore').textContent = '';
    document.querySelector('#roundResult').textContent = '';
    // reenable choice buttons
    choices.forEach(button => {
        button.addEventListener('click', playerSelectionMade)
    });
}

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
    return result;
}

function playRound(playerSelection){
    let computerChoice = computerPlay();
    // display computer choice
    const computerChoiceH2 = document.querySelector('#computerChoice');
    console.log(computerChoiceH2);
    computerChoiceH2.textContent = computerChoice
    const playerChoiceH2 = document.querySelector('#playerChoice');
    playerChoiceH2.textContent = playerSelection;
    numberOfRounds++;

    // determine winner and return result
    if (playerSelection === "rock") {
        if (computerChoice == "rock"){            
            return "tie";
        } else if (computerChoice === "paper"){
            computerScore++;
            return "player loss";
        } else if (computerChoice === "scissors"){
            playerScore++;
            return "player win";
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "paper"){
            return "tie";
        } else if (computerChoice === "rock"){
            playerScore++;
            return "player win";
        } else if (computerChoice === "scissors"){
            computerScore++;
            return "player loss";
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "scissors"){
            return "tie";
        } else if (computerChoice === "rock"){
            computerScore++;
            return "player loss";
        } else if (computerChoice === "paper"){
            playerScore++;
            return "player win";
        }
    }
}