const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let won = false;
let cancelled = false;

while (attempts < 5) {
    const input = prompt("Guess a number between 1 and 100:");

    // Handle Cancel
    if (input === null) {
        console.log("Game cancelled.");
        cancelled = true;
        break;
    }

    // Validate input
    if (input.trim() === "" || !Number.isFinite(Number(input))) {
        alert("Invalid input. Please enter a number.");
        continue;
    }

    const guess = Number(input);

    // Accept only whole numbers from 1 to 100
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        alert("Enter a whole number between 1 and 100.");
        continue;
    }

    // Count valid guesses
    attempts++;

    // Compare the guess with the secret number
    if (guess > secretNumber) {
        console.log(`Guess ${attempts}: ${guess} → Too high`);
    } else if (guess < secretNumber) {
        console.log(`Guess ${attempts}: ${guess} → Too low`);
    } else {
        console.log(`Guess ${attempts}: ${guess} → Correct!`);
        won = true;
        break;
    }
}

// Reveal the secret number if the player loses
if (!won && !cancelled) {
    console.log(`Game over! The secret number was ${secretNumber}.`);
}