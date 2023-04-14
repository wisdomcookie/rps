
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    result = "LOSS";

    switch(playerChoice){
        case "ROCK":
            if(computerChoice === "SCISSORS")
                result = "VICTORY";
            else if(computerChoice === "ROCK")
                result = "DRAW";
            break;

        case "PAPER":
            if(computerChoice === "ROCK")
                result = "VICTORY";
            else if(computerChoice === "PAPER")
                result = "DRAW";
                break;

        case "SCISSORS":
            if(computerChoice === "PAPER")
                result = "VICTORY";
            else if(computerChoice === "SCISSORS")
                result = "DRAW";
            break;
    }

    switch(result){
        case "LOSS":
            return `You Lose! ${computerChoice} beats ${playerChoice}`;
        case "DRAW":
            return `Draw! You both picked ${playerChoice}`;
        case "VICTORY":
            return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
}

function game(){
    let count = 0;
    let wins = 0;
    let losses = 0;

    while(count < 5){
        playerSelection = prompt("Enter choice:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        
        if(result.includes("Lose")){
            losses++;
        }
        else if(result.includes("Win")){
            wins++;
        }
        count++;
    }

    if(wins > losses){
        return "You win";
    }
    else if(losses > wins){
        return "You lose";
    }
    else{
        return "Draw";
    }

}

console.log(game());