let arrm = [10,20,30,40,50];

//! for loop 

for (let i=0;i<arrm.length;i++)
{
    console.log(i,arrm[i]);
}
console.log("********************");


//! for-of in array (gives elements) 

for (let ele of arrm)
{
    console.log(ele);
}
console.log("********************");


//! for-in in object (gives index)

for(let i in arrm)
{
    console.log(i, arrm[i]);
}


let obj={
    name: "abc",
    age : 10,
    mark : [47,24,54],
    isActor:true
};


//! for-in in object (gives key)

for(let key in obj)
    {
        console.log(key);
    }
console.log("*****************");
    
//! for-of in object (throw error)
 
//for(let a of obj)
//{
    //console.log(value);
//}
    
    
//! for each()
    
let ar0 = [12,12,224,34,4,35]
ar0.forEach((ele, index,array) => {
    console.log(ele, index,array);
});
console.log("*******");

let ar1 = []

ar0.forEach((ele)=>{
    if(ele>20)
    {
        ar1.push(ele);
    }
});
console.log(ar1);
    
    
//!higher order method
    
let array = [12,43,5,4,65];
array.forEach(element => {
    console.log(element);
});
console.log("*****************");
    
let array1 = [12,23,52,7,65,33];
array1.forEach((element,index,array) => {
    console.log(element,index,array);
});
console.log("*****************");
    
let array2 = []
    
array1.forEach((element) =>{
    if (element>20)
    {
        array2.push(element);
    }
});
console.log(array2);
console.log("*****************");
    
    
//! filter
    
let filterreArray = array2.filter(element=> {
    return element>20;
});
console.log(filterreArray);
console.log("*****************");
    
    
//! adding some number with each element
    
let add = [];
array1.forEach(element=>{
    add.push(element+100);
});
console.log(add);
console.log("*****************");
    
//! map method
    
let mapArray = array1.map(element=>{
    return element+100;
});
console.log(mapArray);
console.log("*****************");

// in one line
let add1 = add0.map(element=>{return element+100;});
    
console.log(add1);
console.log("*****************");
    
    
//! elements who are greater than 30 you have to add 100 with them 
    
let add0 = array1.filter(element=>{
    return element>30;
});
console.log(add0);


//! filter and map in single line
    
let add2 = array1.filter(element=>{return element>20}).map(element=>{return element+100}); // method chaining
console.log(add2);
console.log("*****************");
    
    
//! reduce()
// (higher order function)
// to all the elements in a array
    
let tes = array1.reduce((Acc, element)=> {
    return Acc+element;
});
console.log(tes);
    
let tes1 = array1.reduce((Acc, element)=> {
    
    return Acc+element;
},1000);
console.log(tes1);
    
    
//! filter, map and reduce in single line
    
let add3 = array1.filter(element=>{return element>20}).map(element=>{return element+100}).reduce((Acc, element)=>{return Acc+element}); // method chaining
console.log(add3);