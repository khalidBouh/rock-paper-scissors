// Good Luck! You got this 💪🏾
// Write your code here.
function playGame(player1, player2) {
    if (player1 === player2) {
      return "tie";
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      return "player1 wins";
    } else {
      return "player2 wins";
    }
  }

  console.log(playGame("rock", "paper"))
  console.log(playGame("scissors", "scissors"))

