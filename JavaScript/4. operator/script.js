//! operator

//! Arithmatic operator

//? Addition

let num1 = 20
let num2 = 30
let add = num1 + num2;
console.log(add); // 50
console.log(`the addition of ${num1} and ${num2} is ${add}`);  // the addition of 20 and 30 is 50
console.log("***************************");


//? Subraction 
let sub = num1 - num2;
console.log(`te subtraction of ${num1} and ${num2} is ${sub}`); // te subtraction of 20 and 30 is -10
console.log("***************************");


//? multiplication

let mul = num1 * num2;
console.log(`the multiplication of ${num1} and ${num2} is ${mul}`); // the multiplication of 20 and 30 is 600
console.log("***************************");


//? Division 

let div = num1 / num2;
console.log(`the division of ${num1} and ${num2} is ${div}`); // the division of 20 and 30 is 0.6666666666666666
console.log("***************************");


//? Modulus 

let num3 = 21
let num4 = 10
let mod = num3 % num4;
console.log(`the modulus of ${num3} and ${num4} is ${mod}`); // the modulus of 21 and 10 is 1
console.log("***************************");


//? Increment (post and pre)

let a = 5
let ans = a++ + ++a + ++a + a++
console.log(ans); // 28
console.log("***************************");


//? Decrement (post and pre)

let b = 6
let c = b--;
console.log(`c values is ${c}`); // c values is 6
console.log(`b values is ${b}`); // b values is 5

let d = --b;
console.log(`d values is ${d}`); // d values is 4
console.log(`d values is ${b}`); // d values is 4
console.log("***************************");


//? Exponentiation

let power = 2 ** 3;
console.log(power); // 8
console.log("***************************");


//! Relational operator

let num5 = 10
let num6 = 20

//? Greaater than (>)

console.log(num5 > num6); // false
console.log(num6 > num5); // true
console.log("***************************");

//? less than 

console.log(num5 < num6); // true
console.log(num6 < num5); // false
console.log("***************************");


//? Greaterthan or equal to (>=)

let num7 = 10
let num8 = 10
console.log(num7 >= num8); // true
console.log("***************************");

//? leasserthan or equal to (<=)

console.log(num8 <= num7); // true
console.log("***************************");


//? equal to (==)

let num9 = 20
let num10 = '20' 
console.log(num9 == num10); // true
console.log("***************************");


//? Strict equal to (===)

console.log(num9 === num10); // false
console.log("***************************");


//? not equal to (!=)

console.log(num9 != num10);  // false
console.log("***************************");


//? Strict not equal to (!==)

console.log(num9 !== num10);  // true
console.log("***************************");


//! logical operator

let num11 = 10
let num12 = 20

//? AND operator 

let ansForAND1 = (num11>10) && (num12<20)
console.log(ansForAND1); // false
console.log("***************************");

let ansForAND2 = (num11==10) && (num12>20)
console.log(ansForAND2);  // false
console.log("***************************");

let ansForAND3 = (num11==10) && (num12>10)
console.log(ansForAND3);  // true
console.log("***************************");

let ansForAND4 = (num11>10) && (num12>20)
console.log(ansForAND4); // false
console.log("***************************");


//? OR operator 

let ansForOR1 = (num11>10) || (num12<20)
console.log(ansForOR1);  // false
console.log("***************************");

let ansForOR2 = (num11==10) || (num12>20)
console.log(ansForOR2);  // true
console.log("***************************");

let ansForOR3 = (num11==10) || (num12>10)
console.log(ansForOR3);  // true
console.log("***************************");

let ansForOR4 = (num11>10) || (num12>10)
console.log(ansForOR4);  // true
console.log("***************************");