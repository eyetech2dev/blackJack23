let firstCard;
let secondCard;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else {
  console.log("You're out of the game! 😭");
}

// Check if the person is old enough to enter the nightclub (21)

let age = 21;

if (age <= 20) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}
