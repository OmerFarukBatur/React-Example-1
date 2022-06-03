import axios from "axios"

//@ts-check
export async function getData(userId ){
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+`${userId}`);
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts/"+`${userId}`);

   
        
    console.log(`User: ${userId}`,user);
    console.log(`Post: ${userId}`,post);
}

