// numberGuess.js

// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

// Use a while loop to keep asking until the user guesses the correct number
while (guess !== correctNumber) {
    guess = prompt("Guess a number between 1 and 10:");
    guess = Number(guess);
    attempts++;

    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct! You guessed it in " + attempts + " attempts.");
    }
}
