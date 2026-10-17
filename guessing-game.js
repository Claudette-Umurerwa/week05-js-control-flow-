// Five-attempt guessing game

const secretNumber = 37;

let attempts = 0;
let correct = false;
let cancelled = false;

while (attempts < 5) {
    let input = prompt(
        "Guess a number between 1 and 100.\n" +
        "Attempt " + (attempts + 1) + " of 5:"
    );

    if (input === null) {
        console.log("Game cancelled.");
        cancelled = true;
        break;
    }

    let guess = Number(input);

    if (input.trim() === "" || !Number.isFinite(guess)) {
        console.log("Invalid input. Please enter a number.");
        continue;
    }
    // Only valid numeric guesses consume an attempt.
    attempts++;

    if (guess > secretNumber) {
        console.log(
            "Guess " + attempts + ": " + guess + " → Too high"
        );
    } else if (guess < secretNumber) {
        console.log(
            "Guess " + attempts + ": " + guess + " → Too low"
        );
    } else {
        console.log(
            "Guess " + attempts + ": " + guess + " → Correct!"
        );

        correct = true;

        // Exit immediately when the player guesses correctly.
        break;
    }

}

// Reveal the secret only after five unsuccessful valid guesses.
if (!correct && !cancelled && attempts === 5) {
    console.log("Game over! The secret number was " + secretNumber);
}

