                    //! how to decleare functions

function hello()
{
    console.log('i am hello function');
}
hello(); // call function
console.log("***********************");


let a = 33;
let b = 13;
function add()
{
    let c = a+b;
    
    console.log(c);
}
add();
console.log("***********************");


                    //! function with parameters

let a1 = 12;
let b1 = 12;
function add1(a1,b1)
{    
    console.log(`the sum of ${a1} and ${b1} is ${a1+b1}`);
}
add1(a1,b1);
console.log("***********************");
//? function name shoud not be same
//? line 31 that type is string interpolation. we use only this `` (qoutes)


// prime number using if else

let a2 = Number(prompt("enter the number"))
function prime(a2)
{
    if (a2%2==0)
    {
        console.log("it is not prime Number");
    }

    else 
    {
        console.log("it is prime Number");
    }
}
prime(a2) 
console.log("***********************");


// prime number using for loop

for (let i=2;i<=9;i++)
{
    if (i%2==0)
        {
            console.log(`${i} it is not prime Number`);
        }
    
        else 
        {
            console.log(`${i} it is prime Number`);
        }
}
console.log("***********************");


// prime number using using count

let num = Number(prompt("enter the number"))
let count=1;
for (let i = 2; i<num; i++)
{
    if (num%i==0)
    {
        count++;
    }  
}
if (count>1)
{
    console.log(`${num} is not prime`);
}
else
{
    console.log(`${num} is prime`);
}
console.log("***********************");


//! function with return value

function sub(q,s)
{
    let r = q - s;
    // console.log(r)
    return r
}
let result = sub(20,10)
console.log(result);
console.log("***********************");


//! anonamous function

// without parameters
let ano = function () // anonamous function with expression
{
    console.log('hello grepo');
}
ano()

// with parameters
let ano1 = function (q,w)
{
    console.log(q+w);
}
ano1(43,23);

// using return
let ano2 = function (q,w)
{
  //  console.log(q+w);
  return q+w;
}
console.log(ano2(43,23));
console.log("***********************");


//! arrow function

// without parameters
let mul = ()=>
{
    console.log('arrow function');
}
mul()

// with parameters
let mul1 = (s,d)=>
{
    console.log(s*d);
} 
mul1(23,13)

// using return
let mul2 = (s,d)=>
{
        return s*d;
} 
console.log(mul2(4,45));
console.log("***********************");


//! arrow function in one line

let div = (z,x)=>z/x
console.log(div(12,3));
console.log("***********************");


//! scope

{
    var l=10; // global variable
    let k=20; // local varialble
    const j=30;

    console.log(l);
    console.log(k);
    console.log(j);
}

console.log(l);
// console.log(k);  // k is not defined
console.log("***********************");


//! nested function and lexical scoping

let h= 10;
let out1= ()=>
{
    let g=30;
    let in1=()=>
    {
        let f=40;
        console.log(h+g+f);
    }
    // console.log(f); // f is not defined
    in1()
}
out1()
console.log("***********************");


// swap using function

let u = 10;
let y = 20;
console.log("before swap");
console.log(u);
console.log(y);
console.log("after swap");
function swap(u,y)
{
   // a=a+b-(b=a)   one line swap 
    u=u+y;
    y=u-y;
    u=u-y;

    console.log(u);
    console.log(y);
}
swap(u,y)
console.log("***********************");


//! higher order function
//? any function which takes other function as a parameters.

let hi= ()=>
{
    console.log("hi");
}
let hello1 = (t,y,u,hi) =>
{
    console.log("iam higher order function");
    console.log(t);
    console.log(y);    
    console.log(u);
    hi()
}
hello1(12,'sr',4,hi)
console.log("***********************");

let addt= (q1,w1)=>
{
    console.log(q1+w1)
}
let subt = (q1,w1)=>
{
    console.log(q1-w1);
}
let mult = (q1,w1)=>
{
    console.log(q1*w1);
}
let operate = (a,b,myfun)=> // myfun is a callback function and operate is a higher order function.
{
    myfun(a,b)
}
operate(10,20,addt);
operate(30,40,subt);
operate(50,60,mult);
console.log("***********************");


//! intermediate invoke function expression

(function()  // anynomous function
{
    console.log("bvnc, this is iife function");
})
();

(function()
{
    console.log('it not get confuse');
})();
console.log("***********************");


// task
let organisation = ()=> {
    let name = "Shadow";
    let charc = () =>{
        let name1 = "Garden";
        console.log(name+" "+name1);
    }
    charc();
}
organisation();