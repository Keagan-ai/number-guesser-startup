let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  //generate a random number between 0 and 9
  //Math.random() generates a number between 0 and 1
  //multiply by 10 to get a number between 0 and 10
  //Math.floor() rounds down to the nearest whole number
  return Math.floor(Math.random() * 10);
};

//console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, target) => {

  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
    return false;
  }

  //distance between human guess and target
  //Math.abs() returns the absolute value of a number. Gets the distance between the two numbers
  //so that we don't get negative numbers
  const humanDiff = Math.abs(target - humanGuess);

  //distance between computer guess and target
  const computerDiff = Math.abs(target - computerGuess);

  //if human guess distance is less than or equal to the computer guess distance
  //return true
  //else return false
  if (humanDiff <= computerDiff) { 
    return true;
  } else {
    return false;
  }

  //this can be simplified to:
  // return humanDiff <= computerDiff;
  //It's a more concise way to write the same logic
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};