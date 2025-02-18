


//if (num>0)
//{
    //console.log('greater than zero');
//}


//! if else 

// let num = 0

// if (num>0)
// {
    // console.log('greater than zero')
// }

// else{
    // console.log('not greater than zero');
// }


/*
let num=0;

if (num == 0)
{
    console.log('it is zero')
}
else if (num>0)
{
    console.log('it is greater tha zero')
}
else{
    console.log('it is less than zero')
}

*/


/*

let num= Number(prompt("Enter the number"));
// let num= Number.parseInt(prompt("Enter the number"));

if (num == 0){
    console.log("it is zero");
}

else if (num<0 && num%2==0){
    console.log("it is negative even number");
}
else if (num<0 && num%2!=0){
    console.log("it is negative odd number");
}
else if (num%2==0){
    console.log("it is even number");
}

else{
    console.log("it is odd number");
}

*/

//! Nested if-Else

let num = 30;

if (num>0)
{
    if (num>15)
        {
            console.log("greater than 15");
        }
    else
    {
        console.log("greater than zero but less than 15");
    }
}
else{
    console.log("less thsn 0");
}


//? fun program

//! program to find it is leap year or not

let year = Number(prompt("enter the year"));

if (year%4==0)
{
    if (year%100!=0)
    {
        if (year%400==0)
        {
            conosle.log("it is a leap yeat")
        }
        else
        {
            console.log(
`               console.log(lnot aeap year)`
            )
        }
    }
}
else{
    console.log("enter the valid year")
}