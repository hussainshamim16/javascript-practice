console.log("hello hussain");

// Synchronous = Line-by-line kaam hota Next line tab chalegi jab pehli complete ho jaye Matlab wait + block
// Asynchronous = Kaam background mein chalta rhey Baaki code rukta nahi Matlab no block + no wait

// Promise = async result ko handle karne ka tareeqa
// async/await = Promises ko use karne ka easy tareeqa hai. clean tarkiika


// example 
// getUserData().then(data => {
//   console.log(data);
// });
// async function fetchData() {
//   const data = await getUserData();
//   console.log(data);
// }
// fetchData();


// fetch data
let usersData = null
async function fetchApi(){
    console.log("Api Start ....")
    const response  = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    usersData = data.posts;
    console.log("Api Response ....", usersData )
}
fetchApi()


// then catch ka easy version hey 
// async function callApi() {
//   try {
//     const response = await fetch('https://dummyjson.com/test');
//     const data = await response.json();
//     console.log(data);

//   } catch (err) {
//     console.log("Error:", err);
//   }
// }


// Promise = future result
// await = us result ka wait
// async function = jahan await allowed


// Promise = Kaam ho jaye to mujhe call karo, warna message kar dena.
// Async/Await = Main wait kar raha hoon, kaam ho jaye to bata dena

