// initilzed appwrite
const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('676ac5d800010ac1625c'); // Replace with your project ID
console.log("app write is run :", client)


// data base initilized
const database = new Appwrite.Databases(client)
// Authantication initilized
const account = new Appwrite.Account(client)


// my Login input data ......
const email = document.getElementById('email')
const password = document.getElementById('password')



//   Add UserFnc
const AddUser = async (event) => {
    const userObject = {
        email: email.value,
        password: password.value,
    }

    try {
        // add authenticaton
        const authdone = await account.create("unique()", email.value,password.value)
        alert("User profile was created successfully!");

        // add blog
        const response = await database.createDocument(
            "676ac68000297a211812",
            "676ac69d0026fcf60e67",
            "unique()",
            userObject
        )
        alert("Blog application")
        console.log(response)
    } catch (error) {
        console.log("Error Message found Maessage ", error.message)
    }

}


// login user
const Loginemail = document.getElementById("Loginemail")
const Loginpassword = document.getElementById("Loginpassword")
const login = ()=>{
    const loginUser  = {
        Loginemail: Loginemail.value,
        Loginpassword: Loginpassword.value
    }
    console.log("Login user ",loginUser)
}










