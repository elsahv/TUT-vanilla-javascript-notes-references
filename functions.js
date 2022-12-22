//*FUNCTIONS
//* METHODS = Built in functions!  ex:"Elsa".toLowerCase(), or Math.random()

//*FUNCTION DECLARATION SYNTAX

//* Example 1
// function sum() {
//   return 2 + 2;
// }
// console.log(sum());

//* Example 2
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(2, 6));

//* Example 3
// function sum(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2;
// }
// console.log(sum(2));

//* Example 4- slice
function getUserNameEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameEmail("playerOne@someEmail.com"));
