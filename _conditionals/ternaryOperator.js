//* CONDITIONALS: Ternary Operator
// SYNTAX
// condition ? ifTrue : ifFalse;

// *EXAMPLE 1
// let soup = "chicken noodle soup";
// let response = soup ? "yes, we have soup" : "sorry no soup today";
// console.log(response);

// *EXAMPLE 2
let soup = "chicken  noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "sorry no soup for you!"
  : soup
  ? `yes we have ${soup} today.`
  : "sorry no soup today";
console.log(soupAccess);
