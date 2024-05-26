const colors = require('colors');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  return userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
    ? userInput
    : 'You did not select anything';
};

const getComputerChoice = () => {
  const computerPick = Math.floor(Math.random() * 3);
  return computerPick === 0
    ? 'rock'
    : computerPick === 1
    ? 'paper'
    : 'scissors';
};

const determineWinner = (userChoice, computerChoice) => {
  let result = '';
  if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock')
  ) {
    result = 'Computer wins'.red; 
  } else if (userChoice === computerChoice) {
    result = 'Tie'.yellow; 
  } else if (userChoice === 'bomb') {
    result = 'You win using cheat "bomb"'.red; 
  } else {
    result = 'You win'.red; 
  }
  return result;
};

const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  console.log('User choice:'.cyan, userChoice.cyan); 
  console.log('Computer choice:'.green, computerChoice.green); 

  console.log(determineWinner(userChoice, computerChoice));
};

playGame('paper');
