
// const perant = document.getElementById('perant')
// console.log(perant.children[0].innerHTML='first 1')
// for (const i of Promise) {
//     console.log(i)
// }
// data
// .then((resolve)=> console.log("succses"))
// .catch((error)=> console.log(error,"wrong"))


//     let data = new Promise((resolve, reject) => {
//         fetch('https://fakestoreapi.com/products/')
//         .then(res => res.json())
//         .then(json => console.log(json))
//     })

// let fnc = async () =>{
//     try {
//       const read = await data
//       console.log("data",data)
//     } catch (error) {
//         console.log("error",error.message)
//     }
// }

//     let data = new Promise((resolve, reject) => {
//         fetch('https://fakestoreapi.com/products/')
//         .then(res => res.json())
//         .then(json => console.log(json))
//     })

// let fnc = async () =>{
//     try {
//       const read = await data
//       console.log("data",data)
//     } catch (error) {
//         console.log("error",error.message)
//     }
// }

// for (let i = 0; i < 20; i++) {
//   console.log("Yellow")

// }


// const myWebData = new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(json=>console.log(json))
// })


// fetchData
// .then((resolve)=>console.log("yes", resolve))
// .catch((error)=>console.log("error", error))

// const printer = async () => {
// try {
//    const alldata = await myWebData;
//    console.log("alldata")
// } catch (error) {
//     console.log("error", error)
// }
// }
// fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(json => console.log(json))

// const 





// console.log("hello world")


// const fetchData = new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products/1')
//         .then(res => res.json())
//         .then(json => console.log("pro", json))
// })

// .then((resolve)=>console.log("yes"))
// .catch((reject)=>console.log("no"))

// const meraArray = [];
// meraArray.push(fetchData)
// console.log(meraArray)


// const printData = async () => {
//     try {
//         let dataList = await fetchData;
//         // console.log(dataList)

//         const products = [];
//         products.push(dataList)

//         const fineloutput = new Promise.all(products)
//         console.log("pro", fineloutput)
//     } catch {
//         console.log('error', error.message)
//     }
// }
// printData()

console.log("hello world");

// in API
// const myApi = () => {
//     var api = fetch('https://fakestoreapi.com/products')

//         .then((sate) => {
//             return sate.json()
         
//         })
//         .then((solve) =>{ 
//             console.log(solve, "solve")
//             calfnc(solve)
//         }
            
//         )
//       .catch((error)=>{
//         console.error("error",error);
//       })
        
// }
// myApi()

// function calfnc(item) {
//     for (const i of item) {
//         console.log('item', i.title)
//     }
// }

// best prectice 


const myPromise = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then((sate)=>{
        return sate.json()
    })
    .then((solve)=>{
        console.log("solve",solve)
        exportData(solve)
    })
    .catch((error)=>{
        console.log("error",error)
    })
}

myPromise()
let container = document.getElementById('container')
const exportData = (perameter1)=>{
for(let i of perameter1){
    // console.log("output",i.id)
    container.innerHTML +=`
        <div class="card m-5" style="width: 20rem;">
            <img src="${i.image}" class="card-img-top" alt="product images">
            <div class="card-body">
              <h5 class="card-title">${i.title}</h5>
              <p class="card-text">${i.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${i.rating.count}</li>
              <li class="list-group-item">${i.category}</li>
              <li class="list-group-item">${i.price}</li>
            </ul>
          </div>`
}
}


// best prectice 















