
let car0 = {
    color: "black",
    brand: "mini",
    price: null
}

let bike0 = {

    capacity: 2,
    __proto__: car0 //  keyword to inherit one class into another ( _ _ proto _ _: (name of parent class)).
}

let bicycle0 = {   // it is multi level inheritance in java, here it call as prototype chaining
    __proto__: bike0
}
console.log(car0.color);
console.log(bike0.color);
console.log(bicycle0.capacity);