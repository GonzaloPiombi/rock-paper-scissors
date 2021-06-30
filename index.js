const rockPapperScissors = ['rock', 'papper', 'scissors'];
let computerChoice = '';
let playerChoice = '';
let computerWins = 0;
let playerWins = 0;

bestOf5();

//Generate number between 0 and 2 to get a random selection of the array for the computer choice for the round.
function computerPlay() {
    computerChoice = Math.floor(Math.random()*3);
    return computerChoice = rockPapperScissors[computerChoice];
}


function playerSelection() {
    playerChoice = prompt('Choose between rock, papper or scissors'); //Prompt the user for a choice
    playerChoice = playerChoice.toLowerCase(); //Lowercase the player's input to allow cases like "RoCK, PAPPER, etc."
    if (playerChoice === 'rock' || playerChoice === 'papper' || playerChoice === 'scissors') { //Check if the input has a correct value, if not, prompt again till user enters one
        return playerChoice;
    } else {
        alert('Enter a valid value');
        playerSelection();
    }
}

function playGame() {
    computerPlay();
    playerSelection();
    console.log(computerChoice);
    console.log(playerChoice);
    if (computerChoice === playerChoice) { //Check to see ho wins and increase partial wins counter.
        alert('It\'s a Tie');
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'papper' && playerChoice === 'rock' || computerChoice === 'scissors' && playerChoice === 'papper') {
        alert('You lose the round!');
        computerWins++;
    } else {
        alert('You win the round!');
        playerWins++;
    }
}

//Loop through the game 5 times(rounds)
function bestOf5() { 
    for (let i = 0; i < 5; i++) {
        playGame();
        console.log(computerWins);
        console.log(playerWins);
        //Check to see if computer or player won 3 rounds, then make i = 5 to exit loop.
        if (computerWins === 3) {
            alert('You lose the game!')
            i = 5;
        } else if (playerWins === 3) {
            alert('You win the game!')
            i = 5;
        }   
    }
}

