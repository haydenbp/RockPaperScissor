function computerPlay(){

let computerRoll = Math.floor(Math.random() * 3) + 1;

    

    switch (computerRoll) {
        case 1:
            computerRoll = "Rock"
        break;

        case 2:
            computerRoll = "Paper"

        break;
        
        case 3:
            computerRoll = "Scissor"

        break;

    }
    
    return computerRoll;
}


let playerChoice = window.prompt("Rock, Paper, or Scissor?");

console.log(`Player Chose ${playerChoice}`);

console.log(`Computer Chooses ${computerPlay()}`);


