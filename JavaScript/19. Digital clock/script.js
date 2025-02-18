let now = new Date();

let getDate = ()=>{
    let day = now.getDay();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    console.log(`${day} ,${hour} ,${min} ,${sec}`);
    //let container = document.querySelector(".container")
}
getDate();





