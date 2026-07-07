function getComputerChoice(){
    // generates a random number from 1 to 3
    let computerChoice = Math.floor(Math.random() * 3) + 1
    // console.log(option);

    if(computerChoice === 1){
        return 'rock'
    }else if(computerChoice === 2){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your move.").toLowerCase();
    // console.log(humanChoice);
    
    if(humanChoice === "rock"){
        return 'rock'
    }else if(humanChoice === "paper"){
        return 'paper'
    }else if(humanChoice === "scissors"){
        return 'scissors'
    }else{
        console.log("plz try again!");
    }
}


