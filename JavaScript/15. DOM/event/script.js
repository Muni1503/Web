

let hello = ()=>{

    console.log('hello ..... ')
    // alert("hellloooooo")
}

let hi =()=>{
    // alert("hi.....")
    console.log("Hi")
}

// hello()


let print = ()=>{

    // document.querySelector(".container2").innerHTML = document.querySelector(".container1").innerHTML

    let con1 = document.querySelector(".container1")
    // console.log(con1)

    let text = con1.innerHTML;
    // console.log(text)

    let con2 = document.querySelector(".container2")
    // console.log(con2)

    con2.innerHTML =text
}

let dark =()=>{
//    console.log('dark')

//  document.body.style.backgroundColor = "black"
//  document.body.style.color = "white"

document.body.classList.add("dark")

}


let light =()=>{
    document.body.classList.remove("dark")
}



// !    Event Listner

let btn2 = document.querySelector(".btn2")


btn2.addEventListener("click",(e)=>{
    // alert("i am event listner")
    console.log(e.target)
})
btn2.addEventListener("click",()=>{
    alert("bye bye")
})




// let san =()=>{
//     alert("san")
// }


btn3 = document.querySelector(".btn3")

btn3.addEventListener("click",(e)=>{

    // alert("san")
    console.log('shadow')
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)
})


//! event propagation

//! event bubbling (it is whenever we click chid it call parent and parant call grand parent)
//! so use event listener

let chiddiv = document.querySelector(".child")
let parentdiv = document.querySelector(".parent")
let gpdiv = document.querySelector(".grandparent")

chiddiv.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("iam a child");
})

parentdiv.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("iam a parent");
})
gpdiv.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("iam a grand parent");
})