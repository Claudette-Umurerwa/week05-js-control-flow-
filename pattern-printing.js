// Pattern printing studio

// A. Growing right tringle
console.log("A. Growing Right Triangle");

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += "*";
    }

    console.log(line);
}

// B. Inverted right angle

console.log("\nB. Inverted Right Triangle");

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= 5 - row + 1; col++) {
        line += "*";
    }

    console.log(line);
}

// C. Centered pyramid

console.log("\nC. Centered Pyramid");

for (let row = 1; row <= 5; row++) {
    let line = "";

    // Add spaces before the stars.
    for (let col = 1; col <= 5 - row; col++) {
        line += " ";
    }

    // Add 1, 3, 5, 7, then 9 stars.
    for (let col = 1; col <= 2 * row - 1; col++) {
        line += "*";
    }

    console.log(line);
}

// D. Inverted pyramid

console.log("\nD. Inverted Pyramid");

for (let row = 1; row <= 5; row++) {
    let line = "";

    // Increase leading spaces on each row.

    for (let col = 1; col < row; col++) {
        line += " ";
    }

    // Decrease stars by two on each row.
    for (let col = 1; col <= 2 * (5 - row) + 1; col++) {
        line += "*";
    }

    console.log(line);
}

// E. Number staircase

console.log("\nE. Number Staircase");

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += col;
    }

    console.log(line);
}

// E. Hollow square

console.log("\nF. Hollow Square");

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= 5; col++) {
        if (
            row === 1 ||
            row === 5 ||
            col === 1 ||
            col === 5
        ) {
            line += "*";
        } else {
            line += " ";
        }
    }

    console.log(line);
}

// Extra challenge

for (let size = 3; size <= 7; size += 2) {
    console.log("\nHollow Pyramid - Rows: " + size);

    for (let row = 1; row <= size; row++) {
        let line = "";

        for (let col = 1; col <= 2 * size - 1; col++) {
            let leftEdge = size - row + 1;
            let rightEdge = size + row - 1;

            // The bottom row is solid.
            // Other rows have stars only on the edges.
            if (
                row === size ||
                col === leftEdge ||
                col === rightEdge
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}
