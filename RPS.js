function computerSelection(){

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

function playerSelection(){

    let playerChoice = window.prompt("Rock, Paper, or Scissor?");

    let validAnswerString = ["rock","paper","scissor"];

   

    if(validAnswerString.includes(playerChoice.toLowerCase())){

        console.log(`Player Chose ${playerChoice}`);


    }
       
        

    else{

        console.log("Invalid Input, please enter Rock,Paper,or Scissor");

        playerSelection();
    }

    







    

}

playerSelection();

console.log(`Computer Chooses ${computerSelection()}`);



