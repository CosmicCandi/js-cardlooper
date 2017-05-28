var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var randomSuit = "";

//Generate a random number
//Assign that random number to a suit
var pickRandomSuit = function () {
var random = Math.random();
  if (random <= 0.25) {
    randomSuit = suits[0];
} else if (random <= 0.50) {
    randomSuit = suits[1];
} else if (random <= 0.75) {
    randomSuit = suits[2];
} else {
    randomSuit = suits[3]
  }
}

//While the suit is not Clubs, keep drawing
do {
  console.log(randomSuit);
  pickRandomSuit();
  //Console Log "Clubs" when "Clubs" is finally drawn
  if (randomSuit === suits[3]) {
    console.log(randomSuit);
  }
} while (randomSuit !== suits[3]);
