console.log("hello hussain");


// Arrow Function ka Revision

// sync = aike kaam tab tak rokey ga jab tak osey pehli vali line comoplete na ho jay = tea
// Async = aike kaam background mey cahlta rhey ga or baaki kaam bhei chalty rheygey 


// Synchronous Example
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Asynchronous
console.log("ham jaa rhey hen chalo ga kia ??");
setTimeout(() => {
    console.log("mey aa rha hun tum loog jaao");
}, 2000);
console.log("Ham AA bhei gay !");


// Promises 
// Future mein ya to kaam ho jayega ya fail ho jayega
// Example Of resolve Reject Pending == laptop milley ga

let bhaiLaptopMillJayga = new Promise((resolve, reject) => {
    let amiKiakehrheihey = false;
    if (amiKiakehrheihey) {
        console.log("Han Han jaan Bhie Hazir hey Kab cahiye Batao");
    } else {
        console.log("Laptop Nhi dey Sakti Ami mana kar rhei hey")
    }
})
bhaiLaptopMillJayga.then((result) => [
    console.log(result)
])
bhaiLaptopMillJayga.catch((error) => {
    console.log(error)
})
// Async result ko handle karne ke liye bina code ko block kiye.


// Example of json JavaScript Object Notation
// Data ko text ki form mein store aur exchange karne ka tareeqa
// console.clear()
let users = {
    name: "ali",
    age: 15,
}
console.log(JSON.stringify(users))
console.log(JSON.parse('{"Car": "Civic", "model" : 2029}'))


// API Application Programming Interface
// Do software apps ko aike dosery sey baaat karvaney ka tareeka = restaurant
// frontend to backend



// finnal output
console.clear()
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let usershen = true;

            if (usershen) {
                resolve({
                    name: "Ali",
                    age: 15
                })
            }
            else {
                reject("User Nhi hen kall Ana")
            }
        }, 3000)
    })
}
console.log("users A rhey he Wait Karo")

getUsers()
    .then(data => {
        console.log("API Response:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("API ka kaam khatam!");
    });



// test Router with api
let allData = null
console.log("API start...");
fetch('https://dummyjson.com/post')
    .then(response => response.json())
    .then(data => {
        allData = data.posts;
        // console.log("all data", allData)
        allData.map((value, index) => {
            console.log(value)
        })

    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("API done!");
    });






