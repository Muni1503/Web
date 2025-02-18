 
//! current date and time

let now = new Date();
console.log(now); //Tue Oct 01 2024 12:27:18 GMT+0530 (India Standard Time)
console.log("*******************");

let hour = now.getHours();
console.log(hour); // 12
console.log("*******************");

let minutes = now.getMonth();
console.log(minutes); // 9
console.log("*******************");

let milliseconds = now.getMilliseconds();
console.log(milliseconds); // 289
console.log("*******************");

let month = now.getMonth();
console.log(month); // 9
console.log("*******************");

let date = now.getDate();
console.log(date); // 1
console.log("*******************");

let day = now.getDay();
console.log(day); // 2     it is tuesday but output count (o-6)-->(sun-sat)
console.log("*******************");

let year = now.getFullYear();
console.log(year); // 2024
console.log("*******************");

let days = ["sun","mon","tue","wed","thur","fri","sat"];
console.log(days[day]); // tue
console.log("*******************");

let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
console.log(months[month]); // oct
console.log("*******************");

console.log(`today is ${date} ${months[month]} ${year} and this is ${days[day]}`); // today is 1 oct 2024 and this is tue
console.log("*******************");

console.log(now.toLocaleString());
console.log("*******************");

console.log(now.toISOString());
console.log("*******************");

console.log(now.toDateString());
console.log("*******************");

console.log(now.toTimeString());
console.log("*******************");

console.log(now.toLocaleTimeString());
console.log("*******************");

console.log(now.toLocaleDateString());
console.log("*******************");


/*
script.js:48 *******************
script.js:50 2024-10-01T07:15:22.479Z
script.js:51 *******************
script.js:53 Tue Oct 01 2024
script.js:54 *******************
script.js:56 12:45:22 GMT+0530 (India Standard Time)
script.js:57 *******************
script.js:59 12:45:22 PM
script.js:60 *******************
script.js:62 10/1/2024
script.js:63 ********************/