const possible_choices = ["rock", "scissors", "paper"]

function getComputerChoice (){
    const random = Math.floor(Math.random()*possible_choices.length);
    let computerChoice = possible_choices[random];
    return computerChoice;
    
}
let playerInput = prompt("Please enter your choice");  
let playerSelection = playerInput.toLowerCase();

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
        return "You lose! Scissors beats Rock"
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

  
  
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
 
