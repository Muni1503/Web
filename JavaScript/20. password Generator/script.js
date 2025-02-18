
let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789";
let spl = "*&%$#@*"

let all = cap + small + num + spl;

let password = ""
// let password += Math.random();

password = password + cap[Math.floor(Math.random()*cap.length)];
password = password + small[Math.floor(Math.random()*small.length)];
password = password + num[Math.floor(Math.random()*num.length)];
password = password + spl[Math.floor(Math.random()*spl.length)];

console.log(password);

while(password.length<8)
{
    password = password + all[Math.floor(Math.random()*all.length)];
}

console.log(password);

let pass = prompt("enter the password")

if (password == pass)
{
    alert("welcome");
}
else{
    alert("wrong password")
}

let log = document.querySelector(".input"); 