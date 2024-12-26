// Initialize Appwrite
const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
    .setProject('676ac5d800010ac1625c'); // Replace with your project ID
console.log("Appwrite initialized:", client);

// Initialize Database and Authentication
const databases = new Appwrite.Databases(client);
const account = new Appwrite.Account(client);
const storage = new Appwrite.Account(client);

// Input fields
const email = document.getElementById('email');
const password = document.getElementById('password');

// Add User Function
const AddUser = async (event) => {


    const userObject = {
        email: email.value,
        password: password.value,
    };

    try {
        // Create authentication
        const authResponse = await account.create("unique()", userObject.email, userObject.password);
        console.log("User created:", authResponse);
        alert("User profile was created successfully!");

        // Save user ID in localStorage
        localStorage.setItem("userId", authResponse.$id);

    } catch (error) {
        console.error("Error Message:", error.message);
        alert("Error: " + error.message);
    }
};

// Login Function
const login = async (event) => {


    const loginEmail = document.getElementById("Loginemail").value;
    const loginPassword = document.getElementById("Loginpassword").value;

    try {
        const session = await account.createEmailPasswordSession(loginEmail, loginPassword);
        console.log("Login successful:", session);
        alert("Login successful!");

        // Save user ID in localStorage
        localStorage.setItem("userId", session.userId);
    } catch (error) {
        console.error("Login error:", error.message);
        alert("Login failed: " + error.message);
    }
};



// Logout Function
const logoutUser = async () => {
    try {
        await account.deleteSession("current");
        localStorage.removeItem("userId");
        alert("Logout successful!");
    } catch (error) {
        console.error("Logout error:", error.message);
    }
};


// Add Blog Function
const addBlog = async (event) => {
    const title = document.getElementById('title').value;
    const Category = document.getElementById('Category').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0]; // Get the selected image file

    if (!image) {
        alert("Please select an image!");
        return;
    }

    try {
        // Upload the image to Appwrite storage
        const storage = new Appwrite.Storage(client);
        const fileResponse = await storage.createFile(
            "676c2d470014253071e3", // Replace with your Bucket ID
            "unique()",
            image
        );
        console.log("Image uploaded:", fileResponse);

        // Generate the public URL for the uploaded image
        const imageUrl = storage.getFileView(
            "676c2d470014253071e3", // Your Bucket ID
            fileResponse.$id       // Uploaded file ID
        );
        console.log("Image URL:", imageUrl);

        // Prepare blog data
        const blogData = {
            title: title,
            Category,
            description: description,
            image: imageUrl, // Save the image URL in the database
        };

        // Add the blog data to the database
        const response = await databases.createDocument(
            "676ac68000297a211812", // Database ID
            "676ac69d0026fcf60e67", // Collection ID
            "unique()",
            blogData
        );
        alert("Blog added successfully!");
        console.log("Blog added:", response);
    } catch (error) {
        console.error("Error adding blog:", error.message);
        alert("Error adding blog: " + error.message);
    }
};


//  fecth data
// Fetch Blogs Function
const fetchBlogs = async () => {
    try {
        // Fetch all documents from the collection
        const response = await databases.listDocuments(
            "676ac68000297a211812", // Database ID
            "676ac69d0026fcf60e67"  // Collection ID
        );
        console.log("Blogs fetched:", response.documents);

        // Select the container where blogs will be rendered
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = ""; // Clear the container

        // Render each blog
        response.documents.forEach(blog => {
            const blogCard = `
                <div class="blog-card">
                    <img src="${blog.image}" alt="${blog.title}" class="blog-image" />
                    <h2>${blog.title}</h2>
                    <p><strong>Category:</strong> ${blog.Category}</p>
                    <p>${blog.description}</p>
                </div>
            `;
            blogContainer.innerHTML += blogCard;
        });
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
        alert("Error fetching blogs: " + error.message);
    }
};

// Call fetchBlogs to render blogs on page load
document.addEventListener("DOMContentLoaded", fetchBlogs);




// todos
const express = require('express')
const app = express()
const routes = require('express').Router()
const bodyparser = require('body-parser')


routes.use(bodyparser.json)

//  todos list 
const todos = [
    {
        id: 1,
        title: "Javascript Book"
    },
    {
        id: 2,
        title: "Html Book"
    },
    {
        id: 3,
        title: "Css Book"
    },
    {
        id: 4,
        title: "Php Book"
    },
]
//  todos list 


// all todos
routes.get('/', (req, res) => {
    res.json(todos)
})

// one todo 
routes.get('/todo/:id', (req, res) => {
    res.send("one todo Show", res.params.id)
})

// add todo 
routes.post('/todo', (req, res) => {
    res.json({
        Message: "hello Hussain",
        all : todos
    })
    console.log("helo hussain kaam nhi ho rha kiya ",req.body);
})

// edit todo 
routes.put('/todo/:id', (req, res) => {
    res.send("add todo")
})

// delete todo 
routes.delete('/todo/:id', (req, res) => {
    res.send("add todo")
})




module.exports = routes

