// loop-laboratory

// 1. Print even numbers from 2 to 50 in ascending order.

let ascending = "Ascending: ";

for (let i = 2; i <= 50; i += 2) {
    ascending += i;

    if (i < 50) {
        ascending += " ";
    }
}

console.log(ascending);


// 2. Print even numbers from 50 down to 2
let descending = "Descending: ";
let number = 50;

while (number >= 2) {
    descending += number;

    if (number > 2) {
        descending += " ";
    }

    number -= 2;
}

console.log(descending);

// 3. Print numbers from 1 to 30, skipping multiples of 6
console.log("Skipping multiples of 6:");

let skippedNumbers = "";

for (let i = 1; i <= 30; i++) {
    if (i % 6 === 0) {
        continue;
    }

    if (skippedNumbers !== "") {
        skippedNumbers += " ";
    }

    skippedNumbers += i;
}

console.log(skippedNumbers);

// The sum of odd numbers from 1 through 99
let sum = 0;

for (let i = 1; i <= 99; i += 2) {
    sum += i;
}

console.log("Sum of odd numbers:", sum);