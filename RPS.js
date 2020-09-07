function computerSelection(){

let computerChoice = Math.floor(Math.random() * 3) + 1;

    

    switch (computerChoice) {
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

    if(playerInput == "Rock" && computerInput == "Scissor"){
        return console.log("You win, rock beats scissor");
    }

    if(playerInput == "Rock" && computerInput == "Paper"){
        return console.log("You lose, paper beats rock");

    if(playerInput == "Paper" && computerInput == "Rock"){
        return console.log("You win, paper beats rock");
    }

    if(playerInput == "Paper" && computerInput == "Scissor"){
        return console.log("You lose, scissor beats paper");
    }

    if(playerInput == "Scissor" && computerInput == "Paper"){
        return console.log("You win, scissor beats paper");
    }

    if(playerInput == "Scissor" && computerInput == "Rock"){
        return console.log("You lose, rock beats scissor");
    }


    if(playerInput == computerInput){
        return console.log("Tie game");
    }
    


}

playerSelection();

console.log(`Computer Chooses ${computerSelection()}`);



