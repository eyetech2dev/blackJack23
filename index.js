let firstCard = 1;
let secondCard = 2;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  console.log("start game");
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = `Cards: ${firstCard} & ${secondCard}`;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("pulling new card");
}
