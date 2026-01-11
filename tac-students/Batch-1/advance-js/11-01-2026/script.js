


// 1 fnc vo peace of code jo input leta aur aot put deta hey 
function hello(name) {
    //    return "Hello" +" "+ name
    return `<h1>Hello ${name}<h1>`
}

let username = hello("ali")
document.body.innerHTML = username
// define jsx

// 2 Object As A DATA Models
let dataBase = {
    name: "Hasnain",
    age: 16,
    isDeveloper: true
}

// break object  destructuring
let { name, age, isDeveloper } = dataBase
// console.log(name)


// array destructuring 
let laptops = ["Dell", "lenovo", "hp"]
let [lap1, lap2, lap3] = laptops
// console.log(lap3)


// 3 Array For UI Logics
let cars = ["toyota", "honda", "civic", "vitiz", "sonata"]
// let tablelength = [1,2,3,4,5,6,7,8,9,10]
// console.log(cars)

// 1 Map Ye aik array ke har item par kaam karta hai aur naya array banata hai.
cars.map((value, indexedDB, all) => {
    // console.log(value)
})
// after array rendering
// console.log(cars.push("ready"),cars)



// yhan tak parhaya hey eskey baad ka parhana hey 


// 2 filters Ye array se kuch cheezein chhant kar naya array banata hai.
let ages = [12, 10, 18, 20, 50, 25];
let adults = ages.filter(value => value >= 18)
// console.log(adults)

// 3 find aike bar jo condition match kare gei Ye array dhun key autput dey ga .
let watches = ["red-W", "black-W", "green-W", "white-W"];
let whiteWatches = watches.find(value => value === "white-W");
// console.log(whiteWatches)


// .map() → Har cheez badal do (sab par kaam karo)
// .filter() → Sirf chahiyee wali cheezein rakho (conditinal)
// .find() → Sirf ek cheez dhundho (pehli wali) or dedo


// Async Ka Matlab 
// Rukne wala kaam nahi, baaki Ka kaam chaltay rhey
// 2 tarickey hen promises or async await

// without ASYNC fnc
function longTask() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += 1
    }
    console.log("ye etni dafa chala"+sum)
    return sum
}

// with async
// async function main() {
//     console.log("🔵 Task shuru ho raha hai...");

//     const tasker = await longTask(); // ⏳ Wait karega

//     console.log("✅ Task complete:", tasker);
//     console.log("🟢 Neechey ka code break nahi hua!");
// }

// main();

longTask()
console.log("mey zinda hun");


