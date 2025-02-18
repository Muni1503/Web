//! Number Methods

let num = Number(10);

console.log(num)
console.log(typeof num)
console.log("********");


let num2 = Number("10") //? convert string into number

console.log(num2)
console.log(typeof num2)
console.log("********");


let num3 = Number("10abc")

console.log(num3) // NaN -->  Not a Number
console.log(typeof num3)  // Number
console.log("********");


 //! 1. Number.parseInt()


let num4 = Number.parseInt("201bc"); //? convert string into number, give number until it reach string
console.log(num4);
console.log("********");

let num5 = Number.parseInt("a4bc19");
console.log(num5);
console.log("********");

//! how to take input from user => prompt() method

 // let a = prompt("enter one number");
// console.log(a);
// console.log(typeof a);
// console.log("********");

//! take two numbers from user and add

// let b=Number(prompt("enter the number"));
// let c=Number(prompt("enter the number"));

// alert(b+c);
// console.log("********");


//! 2. Number.isFinite()

let num6=1000000; //? check finite or not (countable or not)

let isFinite =Number.isFinite(num6);
console.log(isFinite); // true

console.log(Number.isFinite("hello")); // false (string)
console.log("********");

console.log(Number.isFinite(2n)); // false (bigInt)
console.log("********");



//! 3. Number.isInteger()

let num7 = 1234;
console.log(Number.isInteger(num7)) // true
console.log("********");

let num8 = 1234.24;
console.log(Number.isInteger(num8)) // false
console.log("********");

//! 4. isNaN()

//? only if we pass number then only false, otherwise it will give true

console.log(isNaN(123)); //false
console.log(isNaN("123.3")) // false
console.log(isNaN("satan")); // true
console.log(isNaN(NaN)); // true
console.log("********");


//! 5. Number.isNaN()

console.log(Number.isNaN(123)); //false
console.log(Number.isNaN("123.3")) // false
console.log(Number.isNaN("satan")); // false
console.log(Number.isNaN(NaN)); // true
console.log("********");


//! 6. Number.parseFloat()

console.log(Number.parseFloat(123.34)) // 123.34
console.log(Number.parseFloat("123.4n4adf")); // 123.4
console.log("********");

//? it is similar to parseInt method.
//? it will stop at character.
