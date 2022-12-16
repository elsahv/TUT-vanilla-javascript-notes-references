//* CONDITIONALS: SWITCH STATEMENTS

//* EXAMPLE 1- SYNTAX
// switch (2) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   default:
//     console.log("no match");
// }

//* EXAMPLE 2- ROCK PAPER SCISSORS
let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("tie game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("player one wins");
    }
    break;

  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("player one wins");
    }
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("player one wins!");
    }
}
