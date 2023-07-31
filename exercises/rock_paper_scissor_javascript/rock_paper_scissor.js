console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error! You must choose either "rock", "paper", or "scissor".');
  }
}
//console.log(getUserChoice('Paper'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
      break;
  }
}
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Sorry. Paper beats rock...COMPUTER won!';
    } else {
      return 'Congratulations! Rock beats scissor...YOU won!';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissor') {
      return 'Sorry. Scissor beats paper...COMPUTER won!';
    } else {
      return 'Congratualtions! Paper beats rock...YOU won!';
    }
  }
  if(userChoice === 'scissor') {
    if(computerChoice === 'rock') {
      return 'Sorry. Rock beats scissor...COMPUTER won!';
    } else {
      return 'Congratulations! Scissor beats paper...YOU won!';
    }
  }
  if(userChoice === 'bomb') {
    return 'BOMB beats everything! YOU won!!!'
  }
};
//console.log(determineWinner('rock', 'paper'));
//console.log(determineWinner('rock', 'scissor'));
//console.log(determineWinner('rock', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You drew ' + userChoice);
  console.log('The computer drew ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
