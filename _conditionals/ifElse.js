//* CONDITIONALS- IF STATEMENTS

//* EXAMPLE 1
// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// if (customerIsBanned) {
//   reply = "No soup for you!";
// } else if (soup && crackers) {
//   reply = `here's your order of ${soup} and crackers`;
// } else if (soup) {
//   reply = `here's your order of ${soup}`;
// } else {
//   reply = "sorry we're out of soup";
// }

// console.log(reply);

//* EXAMPLE 2
// let testScore = 59;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else {
//   if (collegeStudent) {
//     grade = "U";
//   } else {
//     grade = "F";
//   }
// }
// console.log(grade);

//* EXAMPLE 3- Decision tree

const playerOne = "scissors";
let computer = "rock";

if (playerOne === computer) {
  // tie game
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer wins
  } else {
    // playerOne wins
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer wins
  } else {
    if (computer === "rock") {
      // computer wins
    } else {
      // playerOne wins
    }
  }
}
