"use strict";

// Get a random whole number from 1 up to and including 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").innerHTML = secretNumber;

// Set score initial value
let score = 20;

// Set highscore initial value
let highscore = 0;

// On check btn click get the guess value
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // Check the guess against the secretNumber and change message
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
