import {
    // app,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from './firebase.js'
console.log(auth)

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const userImage = document.getElementById("userImage")
const signup = document.getElementById("signup")

const Loginemail = document.getElementById("Loginemail")
const Loginpassword = document.getElementById("Loginpassword")
const loginbtn = document.getElementById("loginbtn")

const title = document.getElementById("title")
const description = document.getElementById("description")
const category = document.getElementById("category")
const postImage = document.getElementById("postImage")
const postupload = document.getElementById("postupload")

signup.addEventListener("click", async () => {
    console.log("Hello")
    try {
        const createuser = {
            name: name.value,
            email: email.value,
            password: password.value,
            profileImage: userImage.files[0]
        }
        const userCreate = await createUserWithEmailAndPassword(auth, createuser.email, createuser.password)
        alert("User is signup")
    } catch (error) {
        console.error(error)
    }
})

loginbtn.addEventListener("click", async () => {
    console.log("login")
    const LogiUser = {
        email: Loginemail.value,
        password: Loginpassword.value
    }
    const userCreate = await signInWithEmailAndPassword(auth, LogiUser.email, LogiUser.password)
    alert("User is login")
    console.log(LogiUser)
});


postupload.addEventListener("click", async () => {
    try {
        const creratePOST = {
            title: title.value,
            description: description.value,
            category: category.value,
            postImage: postImage.files[0]
        }
        console.log(creratePOST)
    } catch (error) {
        console.log(error.message)
    }
});
