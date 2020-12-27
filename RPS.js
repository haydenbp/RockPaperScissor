let computerWins = 0;
let playerWins = 0;
let numberOfRounds = 0;

const playCount = document.querySelector('div')

playCount.textContent = `Players Wins: ${playerWins} \nComputer Wins: ${computerWins}\n Number of Rounds: ${numberOfRounds}  `



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


/*function playerSelection(){

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

}*/
// allows the user to input their choice for the round. verifies that input is a valid choice.


function gamePlay(computerInput,playerInput){

    console.log(`Computer Chooses ${computerInput}`);

    computerInput = computerInput.toLowerCase();
    
    playerInput = playerInput.toLowerCase();


    if(playerInput == "rock" && computerInput == "scissor"){
        console.log("You win, rock beats scissor");
        playerWins++
        numberOfRounds++
        return 1;
    }

    else if(playerInput == "rock" && computerInput == "paper"){
        console.log("You lose, paper beats rock");
        computerWins++
        numberOfRounds++
        return -1;

    }    

    else if(playerInput == "paper" && computerInput == "rock"){
        console.log("You win, paper beats rock");
        playerWins++
        numberOfRounds++
        return 1;
    }

    else if(playerInput == "paper" && computerInput == "scissor"){
        console.log("You lose, scissor beats paper");
        computerWins++
        numberOfRounds++
        return -1;
    }

    else if(playerInput == "scissor" && computerInput == "paper"){
        console.log("You win, scissor beats paper");
        playerWins++
        numberOfRounds++
        return 1;
    }

    else if(playerInput == "scissor" && computerInput == "rock"){
        console.log("You lose, rock beats scissor");
        computerWins++
        numberOfRounds++
        return -1;
    }


    else if(playerInput == computerInput){
        console.log("Tie Round");
        numberOfRounds++
        return 0
        
    }
    
}



playerSelection = () =>{

    console.log('reee');

    let playerChoice = 0;

    const buttons = document.querySelectorAll('button');


        buttons.forEach(button =>{

            button.addEventListener('click', e => {


                playerChoice = `${button.textContent}`

                console.log(typeof playerChoice);

                console.log(numberOfRounds)

                gamePlay(computerSelection(),playerChoice);

                playCount.textContent = `Players Wins: ${playerWins} \nComputer Wins: ${computerWins}\n Number of Rounds: ${numberOfRounds}  `
                
                if(numberOfRounds %5 === 0) {

                    console.log('REEEEE')
                    console.log(playerWins,computerWins)


                    if(computerWins > playerWins){
                        console.log(`The Computer is the winner`);

                        alert(`The Computer is the winner`);
                
                    }
                
                    if(computerWins < playerWins){
                        console.log(`You won!`);
                        alert(`You won!`);
                    }
                
                    if(computerWins == playerWins){
                        console.log(`Tie Game`);
                        alert(`Tie Game`)
                
                    }
                
                
                
                }


                


            });
      
        });  
        

} ;

//this function plays a round of rock paper scissor and displays the result in the console




        


playerSelection();




//game();
