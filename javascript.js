let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.random();

  if (choice < 0.33) {
    return "rock";
  }
  else if (choice > 0.33 && choice < 0.66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose Rock, Paper or Scissors");

  return choice.toLowerCase();
}

function startGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore < computerScore || humanScore > computerScore) {
    const winner = humanScore > computerScore ? 'human' : 'computer';
    console.log(`${winner} wins!`);
  }
  else {
    console.log('The game tied');
  }
}

function playRound(humanChoice, computerChoice) {

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      console.log('Its a tie');
    }
    else if (computerChoice === 'paper') {
      console.log('You lose, paper beats rock');
      computerScore++;
    }
    else if (computerChoice === 'scissors') {
      console.log('You win, scissors beat rock');
      humanScore++;
    }
  }

  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('You win, paper beats rock');
      humanScore++;
    }
    else if (computerChoice === 'paper') {
      console.log('Its a tie');
    }
    else if (computerChoice === 'scissors') {
      console.log('You lose, scissors beat paper');
      computerScore++;
    }
  }

  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('You lose, rock beats scissors');
      computerScore++;
    }
    else if (computerchoice === 'paper') {
      console.log('You win, scissors beat paper');
      humanScore++;
    }
    else if (computerChoice === 'scissors') {
      console.log('Its a tie');
    }
  }
}

startGame();