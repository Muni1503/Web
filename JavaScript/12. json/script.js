//! json Methods

let obj={
    name: "abc",
    age : 10,
    mark : [47,24,54],
    isActor:true
};
console.log(obj); // {name: 'abc', age: 10, mark: Array(3), isActor: true}
console.log("**********");

//! 1. Stringify()
// convert object to json

let obj0 = JSON.stringify(obj);
console.log(obj0); // {"name":"abc","age":10,"mark":[47,24,54],"isActor":true}
console.log(typeof obj0);  // String
console.log("**********");


//! 2. parse()
// convert json to parse

let obj1 = JSON.parse(obj0);
console.log(obj1); // {name: 'abc', age: 10, mark: Array(3), isActor: true}
console.log("**********");
