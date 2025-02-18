//! object 

//? how to declare the object

let student ={
    name: "shadow",
    age: "19",
    isStudent : true,
    subject : ["java","html","css"],
    work : ()=> { console.log("hello iam function inside student")},
    address : {
        city : "chennai",
        pin : 600028
    },
}
console.log(student);
console.log("*************");

// how to access any element from the object
// by using dot(.)

console.log("isStudent");
console.log("**************");

// add element in the object

student.phoneNo = 9876543234
console.log(student);

// how to modify any key value

student.age= 15
console.log(student);

// how to delete the element in the object

delete student.phoneNo
console.log(student);
console.log("******************");

// call function in the object

student.work()
console.log("*****************");

// method of object 
let obj={
    name: "abc",
    age : 10,
    mark : [47,24,54],
    isActor:true
}
console.log("*****************");

// 1. object.keys(object_name)

let keys = Object.keys(obj)
console.log(keys);
console.log("*****************");


// 2. object.values(object_name)

let values = Object.values(obj)
console.log(values);
console.log("*****************");


// 3. object.entires(object_name)

let entries = Object.entries(obj)
console.log(entries);
console.log("*****************");

// 4. object.fromEntries

let object2  = Object.fromEntries(entries)
console.log(object2);
console.log("*****************");

// 5. object.freeze(object_name)

console.log("before freeze");
console.log(obj);

Object.freeze(obj)
obj.age = 20
obj.phoneNo = 9876543421

console.log("after freeze");
console.log(obj);
console.log("*****************");


// 6. object.isFrozen()

console.log(Object.isFrozen(obj));
console.log("*****************");


// 7. object.seal()

Object.seal(obj)
console.log("before seal");
console.log(obj);

obj.phoneNo = 9876543421
obj.age = 17

console.log("after seal");
console.log(obj);
console.log("*****************");


// 8. object.isSeal()

console.log(Object.isSealed(obj));
console.log("**********************");

// 9. object_name.hasOwnProperty

console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("subject"));
console.log("*****************");


// destructuring object
let objj={
    name : "sha",
    age : 21,
    isStudent : true
}

let {name,age,isStudent} = objj;
console.log(name);


// spread operator

let objj1 = {
    skils : "java"
}

let output = {...objj, ...objj1}
console.log(output);