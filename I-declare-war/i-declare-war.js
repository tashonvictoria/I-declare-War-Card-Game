class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        let rank = ranks[i];
        let suit = suits[j];
        let value = i;

        this.cards.push(new Card(rank, suit, value));
      }
    }
  }
}
const deck = new Deck();
console.log(deck);

/* deck is shuffled */
function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

array = deck.cards;
shuffle(array);
console.log(array);

/* shuffled deck is split between player1 and player 2 */

player1 = array.splice(26, 52);
player2 = array.splice(0, 26);

console.log(player1);
console.log(player2);


/* player1 draws a card */

function drawCardPlayer1() {
  return player1.pop();
}
console.log("Player 1 draws a card");
drawCardPlayer1(player1);

/* player2 draws a card */

function drawCardPlayer2() {
  return player2.pop();
}
console.log("Player 2 draws a card");
drawCardPlayer2(player2);

/* cards are compared, higher value wins and takes cards */

if (player1[0].value > player2[0].value) {
  console.log("Player 1 wins!");
  player1.push(player1[0], player2[0]);
} else if (player2[0].value > player1[0].value) {
  console.log("Player 2 wins!");
  player2.push(player2[0], player1[0]);
}

else {
  console.log("War");
  war();
  function war() {
    // player1.shift();
    // player1.shift();
    // player1.shift();
    player1.shift();

    // player2.shift();
    // player2.shift();
    // player2.shift();
    player2.shift();

    if (player1 == 0 || player2 == 0) {
      console.log("Game over!");
    } else if (player1.value > player2.value) {
      console.log("Player 1 wins!");
      player1.push(player1, player2);
      console.log(`PLayer 1 has ${player1.length} cards`)
      console.log(`PLayer 2 has ${player2.length} cards`)
    } else if (player1.value < player2.value) {
      player1.push(player1, player2);
      console.log(`PLayer 1 has ${player1.length} cards`)
      console.log(`PLayer 2 has ${player2.length} cards`)
    }

    /* game goes until one player is out of cards */

    function playGame() {
      let i = 1
      let len = player1.length
      while (len != 0) {
        console.log(`Round ${i}`)
        i++
        console.log(`PLayer 1 has ${player1.length} cards`)
        console.log(`PLayer 2 has ${player2.length} cards`)
        if (player1.length > player2.length) {
          len = player2.length
        } else {
          len = player1.length
        }
      }
      if (player1.length == 0) {
        console.log('Player 2 Wins It All!')
      } else if (player2.length == 0) {
        console.log('PLayer 1 Wins It All!')
      }
    }
    playGame()

