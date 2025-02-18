// dummy api
// "https://api.github.com/users"

//! fectch

// it is used to fect the data 
// it will give promise
// convert into json
// then again give promise
// handle the promise 

/* let fetchData = fetch("https://api.github.com/users")
// console.log(fetchData);

fetchData.then((data)=>{
    console.log(data);

    let jsonData = data.json()
    console.log(jsonData);

    jsonData.then((data)=>{
        console.log(data);
    }).catch((arr)=>{
        console.log(arr);
    })
    
}).catch((arr)=>{
    console.log(arr);
})*/


//! to get the user names
/*

let fetchData = fetch("https://api.github.com/users")
// console.log(fetchData);

let container = document.querySelector(".container")

fetchData.then((data)=>{
    // console.log(data);

    let jsonData = data.json()
    // console.log(jsonData);

    jsonData.then((finaldata)=>{
     //  console.log(finaldata);
     finaldata.map((ele)=>{
        let li = document.createElement('li')
        li.innerText = ele.login;
        // console.log(li); // it will return all the login info in list item

        container.append(li)
        
    })

    }).catch((arr)=>{
       console.log(arr);
    })
    
}).catch((arr)=>{
    console.log(arr);
})

*/

/*
let fetchData = fetch("https://api.github.com/users");

fetchData.then((data)=>{
    let jsonData = data.json();

    jsonData.then((finalData)=>{
        console.log(finalData);
    })
    return jsonData;
})
*/

/*

let fetch_data = async()=> {
    try
    {
        let data = await fetch("https://api.github.com/users")
        console.log(data);

        let jsonData = data.json()
        console.log(jsonData);

        jsonData.then((finaldata)=>{
        console.log(finaldata);
        })
    }
    catch (arr)
    {
        console.log(arr);
    }
}
fetch_data();

*/
