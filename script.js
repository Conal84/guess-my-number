"use strict";

// A function to get a random number from 1 up to and including 20
function getRandNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Set the secret random number
let secretNumber = getRandNum();

// Set score initial value
let score = 20;

// Set highscore initial value
let highscore = 0;

// Function to change the message to the user
const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

// Function to set the score
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// On check btn click get the guess value
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // If no number entered
  if (!guess) {
    displayMessage("❌ No Number!");
  }
  // if guess is correct
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
  }
  // if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      setScore(score);
    } else {
      displayMessage("❌ You lost the game!");
      setScore(0);
    }
  }
});

// When again button is click restore initial settings
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").value = "";
  setScore(20);
  secretNumber = getRandNum();
});
