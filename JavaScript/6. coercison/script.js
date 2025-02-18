//! number converting into string (implicit conversion or typecasting)

let result ='5'+2;

console.log(result); // output : 52


//! string converting to number (explicit)

let  result2='5'-2;

console.log(result2);   //output : 3


//! false values 

// false, null, undifined,+-0, NaN,""

let a=10;


if (a<10)//(false)
{
    console.log('hello');
}

else{
    console.log('hi')
}
// o/p ---> hi



//! string converting into boolean

// for string ("sha") it takes as true. we want else block executed means ("") empty string need to given.
if ('sha')
{
    console.log('helo')
}

else {
    console.log('hi')
}



// true 

let a1=20;

if (true)
    {
        console.log('hello');
    }
    
    else{
        console.log('hi')
    }