/* setTimeout(()=>{
    console.log("Selam")
},2000); */

/* setInterval(()=>{
    console.log("AA")
},1000); */

/* const sayHi=(cb)=>{
    cb();
} */

/* sayHi(()=>{
    console.log("Hello");
}); */

// import fetch from "node-fetch"

/*fetch("https://jsonplaceholder.typicode.com/users/1")
.then((data) => data.json())
.then((users) => {
    console.log("Users Yuklendi", users);


    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => data.json())
    .then(post => {
        console.log("Post 1 Yuklendi",post);

        fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((data) => data.json())
        .then((data) => console.log("Post 2 Yuklendi",data));
    });
});*/

/* async function getData(){
    const user = await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
        ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        ).json();
    
    const post2 = await (
            await fetch("https://jsonplaceholder.typicode.com/posts/2")
            ).json();    
        
    console.log("User 1",user);
    console.log("Post 1",post1);
    console.log("Post 1",post2);
} */

//getData();

/* (async () => {
    const user = await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
        ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        ).json();
    
    const post2 = await (
            await fetch("https://jsonplaceholder.typicode.com/posts/2")
            ).json();    
        
    console.log("User 1",user);
    console.log("Post 1",post1);
    console.log("Post 2",post2);
})(); */


import axios from "axios";

/* (async () => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/1");

    const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    
    const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");    
        
    console.log("User 1",user);
    console.log("Post 1",post1);
    console.log("Post 2",post2);
})(); */

const getComments = () =>{
    return new Promise((resolve,reject) => {
        resolve("Comments");
    });
};

getComments()
.then((data) => console.log(data))
.catch((e) => console.log(e));