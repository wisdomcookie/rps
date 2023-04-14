
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

    
    let restring = "";
    switch(result){
        case "LOSS":
            player2++;
            restring = `You Lose! ${computerChoice} beats ${playerChoice}`;
            break;
        case "DRAW":
            restring = `Draw! You both picked ${playerChoice}`;
            break;
        case "VICTORY":
            player1++;
            restring = `You Win! ${playerChoice} beats ${computerChoice}`;
            break;
    }
    updateScore();
    gameCheck();
    return restring;
}

// function game(){
//     let count = 0;
//     let wins = 0;
//     let losses = 0;

//     while(count < 5){
//         playerSelection = prompt("Enter choice:");
//         computerSelection = getComputerChoice();
//         result = playRound(playerSelection, computerSelection);
        
//         if(result.includes("Lose")){
//             losses++;
//         }
//         else if(result.includes("Win")){
//             wins++;
//         }
//         count++;
//     }

//     if(wins > losses){
//         return "You win";
//     }
//     else if(losses > wins){
//         return "You lose";
//     }
//     else{
//         return "Draw";
//     }

// }

let player1 = 0;
let player2 = 0;

function gameCheck(){
    if(player1 === 5 || player2 === 5){
        game.textContent = "Player 1 wins!";
    }
    else if(player2 === 5){
        game.textContent = "Player 2 wins!";
    }
}

function updateScore(){
    score.textContent = `Player 1: ${player1}, Player 2: ${player2}`;
}

const round = document.querySelector('.round');
const score = document.querySelector('.score');
const game = document.querySelector('.game');

const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => {
    let playerChoice = "Rock";
    result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    round.textContent = result;
});

const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => {
    let playerChoice = "Paper";
    result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    round.textContent = result;
});

const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => {
    let playerChoice = "Scissors";
    result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    round.textContent = result;
});



//console.log(game());