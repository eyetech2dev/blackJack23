let firstCard = 1;
let secondCard = 2;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

let message = "";

function startGame() {
  console.log("start ganme");

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  // CASH OUT!
  console.log(message);
}
