const possible_choices = ["rock", "scissors", "paper"]

function getComputerChoice (){
    const random = Math.floor(Math.random()*possible_choices.length);
    let computerChoice = possible_choices[random];
    return computerChoice;    
}
// let playerInput = prompt("Please enter your choice");  
// let playerSelection = playerInput.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (!possible_choices.includes(playerSelection)) {
        return "Invalid input POFYUZ!"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper"
    }       
    else {
        return "It's a tie!"
    }
}
const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);
const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    div.textContent = '';
    div.textContent = playRound('rock', getComputerChoice())
})
const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    div.textContent = '';
    div.textContent = playRound('scissors', getComputerChoice())
})
const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    div.textContent = '';
    div.textContent = playRound('paper', getComputerChoice())
})

  
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
    
