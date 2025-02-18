
//! SetTimeOut()

console.log("hi");
console.log("helo");
let time = setTimeout(()=>{
    console.log("this is set time out")
},1000);
console.log("anybody");
console.log("hear");

let hel = ()=>{
    console.log('this is hel');
}
setTimeout(love,3000);
console.log("***********");


//! setinterval()
/*console.log("hi");
console.log("helo");
setInterval(()=>{
    console.log("this is set interval");
},2000);
console.log("anybody");
console.log("hear");
console.log("***********");
*/

//! clearinterval()

let interval1 = setInterval(()=>{
    console.log("this is clear interval");
},1000);
//clearInterval(interval1);  //to stop the interval 

//? want to stop after specific repeated time of output
setInterval(()=>{
    clearInterval(interval1);
},5000);


//! cleartimeout()
// to stop the timeout
setTimeout(()=>{
    console.log("set time out");
},1000);
clearTimeout(time);


//example

let interval2 = setInterval(()=>{
    console.log("hell");
}, 4000);


let time1 = setTimeout(() => {
    clearInterval(interval2);
}, 1000);
clearTimeout(time1);