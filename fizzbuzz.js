// 1. FizzBuzz from 1 to 100

let output = "";
let fizzBuzzCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i > 1) {
        output += ",";
    }

    // the combined condition
    if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz";
        fizzBuzzCount++;

    } else if (i % 3 === 0) {
        output += "Fizz";

    } else if (i % 5 === 0) {
        output += "Buzz";

    } else {
        output += i;
    }

}

console.log(output);
console.log("FizzBuzz count:", fizzBuzzCount);


// FizzBuzzPop from 1 to 150

let extraOutput = "";
let fizzBuzzPopCount = 0;

for (let i = 1; i <= 150; i++) {
    if (i > 1) {
        extraOutput += ", ";
    }

    // Check all three divisors

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        extraOutput += "FizzBuzzPop";
        fizzBuzzPopCount++;
    } else if (i % 3 === 0 && i % 5 === 0) {
        extraOutput += "FizzBuzz";
    } else if (i % 3 === 0 && i % 7 === 0) {
        extraOutput += "FizzPop";
    } else if (i % 5 === 0 && i % 7 === 0) {
        extraOutput += "BuzzPop";
    } else if (i % 3 === 0) {
        extraOutput += "Fizz";
    } else if (i % 5 === 0) {
        extraOutput += "Buzz";
    } else if (i % 7 === 0) {
        extraOutput += "Pop";
    } else {
        extraOutput += i;
    }
}

console.log("\nExtra challenge (1-150):");
console.log(extraOutput);
console.log("FizzBuzzPop count:", fizzBuzzPopCount);
