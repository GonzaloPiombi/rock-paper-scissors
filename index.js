const rockPaperScissors = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
let computerChoice = '';
let playerChoice = '';
let computerWins = 0;
let playerWins = 0;


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        document.querySelectorAll('div')[3].textContent = '';
        playerChoice = button.id;
        playerChoiceImage = document.querySelector(`.${playerChoice}`);
        document.querySelectorAll('div')[3].appendChild(playerChoiceImage.cloneNode(true)).classList.add('choice-image');
        playGame();
    });
});


function playGame() {
    computerPlay();
    if (computerChoice === playerChoice) { //Check to see who wins and increase partial wins counter.
        console.log('It\'s a tie');
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock' 
                    || computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWins++;
        document.getElementById('computer-wins').textContent = `Computer score: ${computerWins}`;
    } else {
        playerWins++;
        document.getElementById('player-wins').textContent = `Player score: ${playerWins}`;
    }
    checkWinner();
}

//Generate number between 0 and 2 to get a random selection of the array for the computer choice for the round. 
function computerPlay() {
    computerChoice = Math.floor(Math.random()*3);
    computerChoice = rockPaperScissors[computerChoice];
    computerChoiceImage = document.querySelector(`.${computerChoice}`)
    document.querySelectorAll('div')[3].appendChild(computerChoiceImage.cloneNode(true)).classList.add('choice-image');
}

function checkWinner() {
    if (computerWins === 5) {
        document.querySelector('h2').textContent = 'Computer wins!';
        playAgain();
    } else if (playerWins === 5) {
        document.querySelector('h2').textContent = 'Player wins!';
        playAgain();
    } else return;
}

function playAgain() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
    const newGame = document.createElement('button');
    newGame.textContent = 'Play again!';
    newGame.classList.add('play-again-button');
    document.querySelector('.play-again-container').appendChild(newGame);
    newGame.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.disabled = false;
        });
        document.getElementById('computer-wins').textContent = `Computer wins: ${computerWins = 0}`;
        document.getElementById('player-wins').textContent = `Player wins: ${playerWins = 0}`;
        document.querySelector('h2').textContent = '';
        document.querySelector('.play-again-container').removeChild(newGame);
    });
}
