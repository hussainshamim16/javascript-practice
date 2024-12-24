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
    } catch (error) {
        console.log("Error Message found Maessage ", error.message)
    }

}

// add Blog 
const Title = document.getElementById('Title')
const discription = document.getElementById('discription')
const blogFnc = {
Title : Title.value,
discription: discription.value,
}
const addBlog = async ()=>{
   try {
    const response = await database.createDatabases(
        "676ac68000297a211812",
        "676ac69d0026fcf60e67",
        "unique()",
        blogFnc
    )
    alert("adding Blog")
   } catch (error) {
    console.log("Error Blog Message ", error.message)
   }
}









