function getComputerChoice(){
    // generates a random number from 1 to 3
    let option = Math.floor(Math.random() * 3) + 1
    // console.log(option);

    if(option === 1){
        return 'rock'
    }else if(option === 2){
        return 'paper'
    }else{
        return 'scissors'
    }
}