let humanScore = 0;
let computerScore = 0;

const resultParagraph = document.querySelector('#roundResult');
const humanScoreSpan = document.querySelector('#humanScore');
const computerScoreSpan = document.querySelector('#computerScore');

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

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      resultParagraph.innerText = 'Its a tie';
    }
    else if (computerChoice === 'paper') {
      resultParagraph.innerText = 'You lose, paper beats rock';
      computerScore++;
    }
    else if (computerChoice === 'scissors') {
      resultParagraph.innerText = 'You win, scissors beat rock';
      humanScore++;
    }
  }

  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      resultParagraph.innerText = 'You win, paper beats rock';
      humanScore++;
    }
    else if (computerChoice === 'paper') {
      resultParagraph.innerText = 'Its a tie';
    }
    else if (computerChoice === 'scissors') {
      resultParagraph.innerText = 'You lose, scissors beat paper';
      computerScore++;
    }
  }

  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      resultParagraph.innerText = 'You lose, rock beats scissors';
      computerScore++;
    }
    else if (computerChoice === 'paper') {
      resultParagraph.innerText = 'You win, scissors beat paper';
      humanScore++;
    }
    else if (computerChoice === 'scissors') {
      resultParagraph.innerText = 'Its a tie';
    }
  }

  humanScoreSpan.innerText = humanScore;
  computerScoreSpan.innerText = computerScore;

  if (humanScore === 3) {
    alert('You won 3 rounds! Lets start a new game!');
    resetRounds();
  }

  if (computerScore === 3) {
    alert('Computer won 3 rounds... Lets try again, if you can win 3 round in a new game!');
    resetRounds();
  }
}

function rockChosen(){
  playRound('rock');
}

function paperChosen(){
  playRound('paper');
}

function scissorsChosen(){
  playRound('scissors');
}

function resetRounds(){
  humanScore = 0;
  computerScore = 0;
  resultParagraph.innerText = '';
  humanScoreSpan.innerText = 0;
  computerScoreSpan.innerText = 0;
}