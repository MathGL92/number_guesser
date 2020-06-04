let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random()*10);
  }
  //generateTarget();
 
const getAbsoluteDistance = (numberOne, numberTwo) => {
    return Math.abs(numberTwo - numberOne);
 }
 
 
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (getAbsoluteDistance(humanGuess, targetGuess) <= getAbsoluteDistance(computerGuess, targetGuess)) {
      return true;
    } else {
      return false;
    }
  }
 //console.log(compareGuesses(1, 6, 2));
 
const updateScore = winner => {
   if (winner === 'human') {
     humanScore += 1;
   } else if (winner === 'computer') {
     computerScore += 1;
   } else {
     return 'Error : This winner does not exist!'
   }
 }
 
const advanceRound = () => currentRoundNumber ++;
 
 //console.log(advanceRound());
 