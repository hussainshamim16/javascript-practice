

let mainContent = document.getElementById("main-content")
let formContener = document.getElementById("form-content")
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")


let info = ["Muhammad Hussain", "Shamim Uddin", "hussainshamim@gmail.com", "pakistan", "031605265"]
let labels = ["Full Name : ", "Last Name : ", "Email : ", "Countery : ", "Phone : "]

// console.log(info.splice(0,"jawedd",2),+)

// for (let i = 0; i < 5; i++) {
//     // console.log
//     console.log("hello word", mainContent.children[i].innerHTML = labels[i] + info[i])
//     console.log(formContener.children[i])

// }

// firstName.value = info[0]
// lastName.value = info[1]
// email.value = info[2]

// const changer = (e)=>{
//     console.log(e.value)
//     info = e.value
// }



const sub = (event) => {
    event.preventDefault()
    console.log("submit")
    const objectOfStd = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    }


    for (const key in objectOfStd) {

        console.log(objectOfStd[key])
        document.getElementById("First").innerHTML = objectOfStd.firstName
        document.getElementById("Last").innerHTML = objectOfStd.lastName
        document.getElementById("wail").innerHTML = objectOfStd.email
        document.getElementById("targetImage").src = './images/imager.png'

    }

    console.log(objectOfStd)
}
// console.log(Object())