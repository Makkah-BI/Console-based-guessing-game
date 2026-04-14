// guess.js – Guess the Number Game

// Generate a random target number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

// Keep track of how many valid guesses the player makes
let attempts = 0;

// Game loop – runs until the player guesses correctly
while (true) {
  // Ask the player for a guess
  const input = prompt("Guess a number between 1 and 100:");

  // If the player clicks Cancel, exit the game
  if (input === null) {
    alert("Game cancelled. Thanks for playing!");
    break;
  }

  // Convert the input to a number
  const guess = Number(input);

  // Validate: must be a number between 1 and 100
  if (Number.isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    continue; // Skip the rest of the loop and ask again
  }

  // Valid guess – increment attempts
  attempts++;

  // Compare the guess to the target
  if (guess === target) {
    alert(
      `Correct! You guessed it in ${attempts} attempt${attempts === 1 ? "" : "s"}.`,
    );
    break; // Exit the loop – game over
  } else if (guess < target) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
}
