function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomChoice = options[Math.floor(Math.random() * options.length)]; // options length = 3, Math.floor rounds down!
    // console.log(randomChoice);
    return randomChoice;   
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase()
    if (playerSelectionLower === computerSelection){
        return ["It's a tie!", 0] // we store an extra thing in order to keep score in the next step
    } else if (playerSelectionLower === 'rock' && computerSelection ==='scissors' ||
               playerSelectionLower ==='scissors' && computerSelection==='paper'  ||
               playerSelectionLower === 'paper' && computerSelection==='rock'){
            return [`You win! ${playerSelectionLower} beats ${computerSelection}`, 1]
    } else {
        return [`You lose. ${computerSelection} beats ${playerSelectionLower}`, 2]
    }
}

//   const playerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
//   console.log(playerSelection)
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        response = window.prompt("Make your choice! Rock, paper or scissors?");
        while (response.toLowerCase() !== "rock" && response.toLowerCase() !== "paper" && response.toLowerCase() !== "scissors"){
            response = window.prompt("Make your choice! Rock, paper or scissors?");
            console.log(response);
        }
        let result = playRound(response, computerPlay());
        console.log(result[0])
        if (result[1] === 1){
            playerScore += 1;
        } else if (result[1] === 2){
            computerScore += 1;
        } 
        console.log(`Your score: ${playerScore}, Computer's score: ${computerScore}`)
      }
    
    if (playerScore > computerScore){
        console.log("YOU WIN!!!!")
    } else if (playerScore < computerScore){
        console.log("YOU ARE A LOSER!!!")
    } else {
        console.log("IT'S A TIE!!!")
    }
    
  }

  game()




// function playRound(playerSelection, computerSelection) {
//     let playerSelectionLower = playerSelection.toLowerCase()
//     if (playerSelectionLower === computerSelection){
//         return ["It's a tie!", 0] // we store an extra thing in order to keep score in the next step
//     } else if (playerSelectionLower === 'rock' && computerSelection ==='scissors'){
//         return [`You win! ${playerSelectionLower} beats ${computerSelection}`, 1]
//     } else if (playerSelectionLower ==='scissors' && computerSelection==='paper'){
//         return [`You win! ${playerSelectionLower} beats ${computerSelection}`, 1]
//     } else if (playerSelectionLower === 'paper' && computerSelection==='rock'){
//         return [`You win! ${playerSelectionLower} beats ${computerSelection}`, 1]
//     } else {
//         return [`You lose. ${computerSelection} beats ${playerSelectionLower}`, 2]
//     }
// }