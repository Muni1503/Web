//! Promise
//? hoe to create promise and handle the resolve and reject

// one object in js. it is used to handle all the a synchronized operation
// how to create => by using new keyword

let p = new Promise((resolve,reject)=>{
    resolve("the promise");
    reject("hiiiiiiiiiiiiiiii")
});

p. then((data)=>{
    console.log((data));
}).catch(err=>{
    console.log(err);
})
console.log("***********************");

let p0 = new Promise((resolve,reject)=>{
    resolve("the promise");
}).then(data=>{
    console.log(data);
});

let p1 = new Promise((resolve,reject)=>{
    //resolve("promise1")
    reject("what");
}).catch(error=>{
    console.log(error);
});
console.log("********************");

let p2 = new Promise((resolve,reject)=>{
    resolve("promise?")
    reject("what");
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
});


//? promise methods

//! promise.any()
// it check all the input for promise() and give as output
// creating multiple promise and link it.

let p01 = new Promise((resolve,reject)=>{
    resolve("the promise 1");
    reject("what happen 1");
});

let p02 = new Promise((resolve,reject)=>{
    resolve("the promise 2");
    reject("what happen 2");
});
let p03 = new Promise((resolve,reject)=>{
    resolve("the promise 3");
    reject("what happen 3");
});
let p04 = new Promise((resolve,reject)=>{
    resolve("the promise 4");
    reject("what happen 4");
});

Promise.any([p01,p02,p03,p04]) // what order you give that order the output depend. ex: [p04,p02,p03,p01] -->o/p: the promise 4.
            .then(data=>{console.log(data)})
            .catch(err=>{console.log(err);})


//! promise.all()
// if all resolve is present o/p -> (4) ['the promise 1', 'the promise 2', 'the promise 3', 'the promise 4']
// if even one resolve is absent o/p -> what happen 3
Promise.all([p01,p02,p03,p04])
            .then(data=>{console.log(data);})
            .catch(err=>{console.log(err);})


//! promise.allsettled()

Promise.allSettled([p01,p02,p03,p04])
            .then(data=>{console.log(data);})
            .catch(err=>{console.log(err);})


//! promise.race()
// it only consider only first comment it give ethier resolve or reject as output

Promise.race([p01,p02,p03,p04])
            .then(data=>{console.log(data);})
            .catch(err=>{console.log(err);})
