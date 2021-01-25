"use strict";

// Get a random whole number from 1 up to and including 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set score initial value
let score = 20;

// Set highscore initial value
let highscore = 0;

// On check btn click get the guess value
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // If no number entered
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number!";
  }
  // if guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
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
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// When again button is click restore initial settings
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").innerHTML = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
