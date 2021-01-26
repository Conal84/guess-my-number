"use strict";

// DOM selectors
let userMessage = document.querySelector(".message");
let userScore = document.querySelector(".score");
const checkBtn = document.querySelector(".check");
let body = document.querySelector("body");
let number = document.querySelector(".number");
const userGuess = document.querySelector(".guess");
let userHighscore = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

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
  userMessage.innerHTML = message;
};

// Function to set the score
const setScore = function (score) {
  userScore.textContent = score;
};

// On check btn click get the guess value
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // If no number entered
  if (!guess) {
    displayMessage("❌ No Number!");
  }
  // if guess is correct
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.innerHTML = secretNumber;
    if (score > highscore) {
      highscore = score;
      userHighscore.innerHTML = highscore;
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
againBtn.addEventListener("click", function () {
  displayMessage("Start guessing...");
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.innerHTML = "?";
  userGuess.value = "";
  setScore(20);
  secretNumber = getRandNum();
});
