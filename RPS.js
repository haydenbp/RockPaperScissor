function computerSelection(){

let computerRandom = Math.floor(Math.random() * 3) + 1;

    let computerChoice;

    switch (computerRandom) {
        case 1:
            computerChoice = "Rock"
        break;

        case 2:
            computerChoice = "Paper"

        break;
        
        case 3:
            computerChoice = "Scissor"

        break;

    }
    
    return computerChoice;
}
// Randomly generates a rock paper or scissor choice for the computer


function playerSelection(){

    let playerChoice = window.prompt("Rock, Paper, or Scissor?");

    let validAnswerString = ["rock","paper","scissor"];


    if(validAnswerString.includes(playerChoice.toLowerCase())){

        console.log(`Player Chose ${playerChoice}`);

        return playerChoice;
    }
       

    else{

        console.log("Invalid Input, please enter Rock,Paper,or Scissor");

        playerSelection();
    }

}
// allows the user to input their choice for the round. verifies that input is a valid choice.


function gamePlay(computerInput,playerInput){

    console.log(`Computer Chooses ${computerInput}`);

    computerInput = computerInput.toLowerCase();
    
    playerInput = playerInput.toLowerCase();


    if(playerInput == "rock" && computerInput == "scissor"){
        console.log("You win, rock beats scissor");
    }

    else if(playerInput == "rock" && computerInput == "paper"){
        console.log("You lose, paper beats rock");
    }    

    else if(playerInput == "paper" && computerInput == "rock"){
        console.log("You win, paper beats rock");
    }

    else if(playerInput == "paper" && computerInput == "scissor"){
        console.log("You lose, scissor beats paper");
    }

    else if(playerInput == "scissor" && computerInput == "paper"){
        console.log("You win, scissor beats paper");
    }

    else if(playerInput == "scissor" && computerInput == "rock"){
        console.log("You lose, rock beats scissor");
    }


    else if(playerInput == computerInput){
        console.log("Tie game");
    }
    
}

gamePlay(computerSelection(),playerSelection());

//playerSelection();

//console.log(`Computer Chooses ${computerSelection()}`);
