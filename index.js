let cards = [];
let hasBlackJack = false;
let isAlive = false;

let sum = 0;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Anthony",
  chips: 200,
  addChips: function (amount) {
    this.chips += amount;
  },
  minusChips: function (amount) {
    this.chips -= amount;
  },
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  console.log("start game");
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    player.addChips(50);
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    player.minusChips(50);
    isAlive = false;
  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + ": $" + player.chips;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
