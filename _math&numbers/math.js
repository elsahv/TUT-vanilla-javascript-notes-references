//*MATH METHODS AND PROPERTIES
// console.log(Math.PI);    //returns pi

// console.log(Math.trunc(Math.PI)); //removes decimals

// console.log(Math.round(3.6)); //rounds number

// console.log(Math.ceil(5.5)); always rounds up, ceil short for ceiling

// console.log(Math.floor(1.5)); //always rounds down, floor = bottom

// console.log(Math.pow(5, 2));  //5 to the power of 2

// console.log(Math.min(4, 5, 9)); //returns smallest number

// console.log(Math.max(4, 5, 9)); //returns largest number

// console.log(Math.random());  //returns random number

//*FROM 1 TO 10
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

//*  NOTE- you should use math.floor(), not math.ceil() for generating 1-10
//* -Math.random returns a range from 0 to 1 that includes 0, but not 1
//* -Math.ceil(Math.random() * 10) has a chance resulting in 0

// *CODE CHALLENGE- return random letter in my name
// console.log("Elsa".charAt(Math.floor(Math.random() * 4)));

// *CODE CHALLENGE- return random letter in any name
const anyName = "Jonathan";

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
