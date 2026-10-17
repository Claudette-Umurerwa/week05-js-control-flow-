// Grade decision engine

let mark = 84;
let grade;
let feedback;
let result;

// check whether the mark is invalid

if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
    console.log("Invalid mark");
} else {

// Assign  grade and feedback

if (mark >= 80) {
    grade = "A";
    feedback = "Excellent";

} else if (mark >= 70) {
    grade = "B";
    feedback = "Very Good";

} else if (mark >= 60) {
    grade = "C";
    feedback = "Good";

}  else if (mark >= 50) {
    grade = "D";
    feedback = "Needs Improvement";

} else {
    grade = "F";
    feedback = "Fail";
}

// mark of 50 or above is a pass
if (mark >= 50) {
    result = "PASS";

} else {
    result = "FAIL";
}

// the result
console.log(`Mark: ${mark} | Grade: ${grade} | ${feedback} | ${result}`);


}