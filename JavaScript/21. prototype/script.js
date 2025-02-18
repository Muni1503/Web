console.log(this);

let student = {
    name:"ronin",
    age: 32
}

let Teacher = {
    name: "hack"
}

let display = ()=>{
    console.log(this);
}
console.log(display());
console.log("*****************");


let student1 = {
    name:"ronin",
    age: 32,
    work: function(){
        console.log(this);
    }

}
console.log(student1.work());

let Teacher1 = {
    name: "hack",
    do:()=>{
        console.log(this);
    }
}
console.log(Teacher1.do());

let display1 = ()=>{
    console.log(this);
}
display1();
console.log("*****************");



//! protype method

let ob = {
    fname: "res",
    lname: "chars",
    age: 23
}

let display2 = function (num,friend){
    console.log(num);
    console.log(friend);
    console.log(this);
    console.log(this.fname);
    console.log(this.lname);
}

// display2(2000,"wes");

display2.call(ob,20000,"wed"); // we can pass parameter normally.
console.log("*****************");

display2.apply(ob,[20000,"der"]) // we pass parameter in array format.
console.log("*****************");

let va = display2.bind(ob,20000,"trs"); // we should store in variable.
// console.log(va);
va();
console.log("*****************");
