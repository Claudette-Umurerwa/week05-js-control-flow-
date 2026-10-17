// Student Results Analyser

let marks = [78, 45, 92, 60, 33, 87, 50, 69];

// counters and totals
let passCount = 0;
let failCount = 0;
let total = 0;
let highest = marks[0];
let lowest = marks[0];

// Extra challenge grade counters

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;

// Analyse each student's mark
for (let mark of marks) {
    total += mark;

    // Determine PASS or FAIL
    if (mark >= 50) {
        console.log("Mark: " + mark + " - PASS");
        passCount++;
    } else {
        console.log("Mark: " + mark + " - FAIL");
        failCount++;
    }

    // Find the highest mark
     if (mark > highest) {
        highest = mark;
    }

    // Find the lowest mark
    if (mark < lowest) {
        lowest = mark;
    }
    // Extra challenge: assign grade
    if (mark >= 80) {
        gradeA++;
    } else if (mark >= 70) {
        gradeB++;
    } else if (mark >= 60) {
        gradeC++;
    } else if (mark >= 50) {
        gradeD++;
    } else {
        gradeF++;
    }
}

// Calculate the average
let average = total / marks.length;

// Print the summary
console.log("------------------------------");
console.log("Passed: " + passCount + " | Failed: " + failCount);
console.log(
    "Highest: " + highest +
    " | Lowest: " + lowest +
    " | Average: " + average.toFixed(2)
);

// Extra challenge: print grade counts
console.log("Grade A: " + gradeA);
console.log("Grade B: " + gradeB);
console.log("Grade C: " + gradeC);
console.log("Grade D: " + gradeD);
console.log("Grade F: " + gradeF);

