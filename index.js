let firstCard = 1;
let secondCard = 2;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// CASH OUT!
console.log(hasBlackJack);
