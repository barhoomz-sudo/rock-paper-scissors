function getComputerChoice() {
  // generates a random number from 1 to 3
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your move.").toLowerCase();
  // console.log(humanChoice);

  if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  } else {
    console.log("plz try again!");
  }
}


// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let tie = 0;

  function playRound(humanChoice, computerChoice) {
    // tie cases
    if (
      (humanChoice === "rock" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
      console.log("Tie");
        tie++;
    }

    // human winning cases
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You won! rock beats scissors.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You won! paper beats rock.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You won! scissors beats paper.");
      humanScore++;
    }

    // computer winning cases
    if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("You lose! rock beats scissors.");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("You lose! paper beats rock.");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("You lose! scissors beats paper.");
      computerScore++;
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if(humanScore > computerScore){
    console.log("YOU WIN! your score is " + humanScore + ", computer score is " + computerScore + " you both tied in "+ tie);
  }else if (computerScore > humanScore){
    console.log("YOU LOSE! computer score is " + computerScore + ", your score is " + humanScore  + " you both tied in "+ tie);
  } else if (computerScore === humanScore){
    console.log("its a TIE! your score is "+ humanScore + " computer score is " + computerScore + " you both tied in "+ tie);
  }
}

playGame();
