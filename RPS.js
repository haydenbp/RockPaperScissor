let computerPlay = Math.floor(Math.random() * 3) + 1;

console.log(computerPlay);

switch (computerPlay) {
    case 1:
        computerPlay = "Rock"
    break;

    case 2:
        computerPlay = "Paper"

    break;
    
    case 3:
        computerPlay = "Scissor"

    break;
}

console.log(computerPlay);

let playerChoice = window.prompt("Rock, Paper, or Scissor?");

console.log(`Player chose ${playerChoice}`);
