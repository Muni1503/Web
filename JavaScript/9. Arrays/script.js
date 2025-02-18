//! Arrays

//! how to decleare array

let arr1 = [1,'shadow',true, [20,30],()=>{}]
console.log(arr1);
console.log(arr1[1]);
console.log("**************");


//! how to know the length of the arrays

let len = arr1.length;
console.log(len);
console.log("**************");


//! method of the array

//? 1. push()
console.log(arr1.push('smith')); // it will print the length of the modified array.
console.log("**************");
arr1.push('smith');
console.log(arr1);
console.log("**************");


//? 2. pop()

let last = arr1.pop()
console.log(last);  // it will print the last element.  [Function (anonymous)]
console.log(arr1); // [ 1, 'shadow', true, [ 20, 30 ] ]
console.log("**************");


//? 3. unshift()

let lenForunshift = arr1.unshift('wyane');
console.log(lenForunshift); // 7
console.log(arr1);
console.log("**************");


//? 4. shift()

let removeElemnts = arr1.shift()
console.log(removeElemnts); // wyane
console.log(arr1); // [ 1, 'shadow', true, [ 20, 30 ], [Function (anonymous)], 'smith' ]
console.log("**************");


//? 5. include()

let includeEle = arr1.includes("shadow");
console.log(includeEle); // true
console.log(arr1);  // [ 1, 'shadow', true, [ 20, 30 ], [Function (anonymous)], 'smith' ]
console.log("**************");


//? 6. indexOf()

let arr2 = [12,33,3,5,56,5]
let indexOfEle = arr2.indexOf(56)
console.log(indexOfEle); 
console.log("**************");


//? 7. lastIndexOf()

let lastin = arr2.lastIndexOf(5)
console.log(lastin);
console.log("**************");


//? 8. concat()

let con = arr2.concat("hello")
console.log(con); // it will combine and return new array. [ 12, 33, 3, 5, 56, 5, 'hello' ]
console.log(arr2); // [ 12, 33, 3, 5, 56, 5 ]
console.log("**************");


//? 9. flat()

let arr3 = [2,3,4,[24,65,75,[13,435,64,6]]]
console.log(arr3);   // [ 2, 3, 4, [ 24, 65, 75, [ 13, 435, 64, 6 ] ] ]

let flatArr = arr3.flat(Infinity)
console.log(flatArr);  // [2, 3, 4, 24, 65, 75, 13, 435, 64, 6]
console.log("**************");


//? 10. reverse()

//let arr2 = [12,33,3,5,56,5]
let rev = arr2.reverse();
console.log(rev); // [ 5, 56, 5, 3, 33, 12 ]
console.log(arr2); // [ 5, 56, 5, 3, 33, 12 ]
console.log("**************");


//? 11. join() 
//(to convert array into string)
let str = arr2.join(" ")
console.log(str);
console.log("**************");


//? 12. slice()

let arr4 = [12,4,46,67,79,32,45,78];
let sliceArr = arr4.slice(2,7)
console.log(sliceArr); // [ 46, 67, 79, 32, 45 ]  extract the element from one array into new array. it will not modify orignal array
console.log("**************");


//? 13. splice()

arr4.splice(2,4);
console.log(arr4); // [ 12, 4, 45, 78 ] it modify the original array.
console.log("**************");

arr4.splice(1,3,'hi'); 
console.log(arr4); // [ 12, 'hi' ]
console.log("**************");

arr4.splice(1,0,"hello");
console.log(arr4); // [ 12, 'hello', 'hi' ]
console.log("**************");


//? 14. Array.isArray() 
//how to check it is array or not
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray("srw")); //false
console.log("**************");

//? destructuring array

let ar1 = [10,20,30];
let ar2 = [40,50,60,70];

let combi = [...ar1, ...ar2];
console.log(combi);

// adding number
let anoth = [...ar1,80]
console.log(anoth);

// res parameter

let [n1,m1,t1,h1] =  ar2
console.log(h1);

// let [n1,m1, ...h1] =  ar2
// console.log(h1);