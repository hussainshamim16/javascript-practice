import {
    app,
    // auth
    auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    // database
    collection, addDoc, db, getDocs, updateDoc, doc, deleteDoc,
    // storage
    getStorage, ref, storage, uploadBytes, uploadBytesResumable, getDownloadURL

} from "./firebase.js";

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const number = document.getElementById("number")
const signup = document.getElementById("signup")

const Loginemail = document.getElementById("Loginemail")
const Loginpassword = document.getElementById("Loginpassword")
const loginbtn = document.getElementById("loginbtn")
const logout = document.getElementById("logout")

const title = document.getElementById("title")
const description = document.getElementById("description")
const category = document.getElementById("category")
const postImage = document.getElementById("postImage")
const postupload = document.getElementById("postupload")

const perantData = document.getElementById("perantData")
const getData = document.getElementById("getData")

signup.addEventListener("click", async () => {
    console.log("Hello")
    try {
        const createuser = {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
        }
        const userCreate = await createUserWithEmailAndPassword(auth, createuser.email, createuser.password)
        alert("User is signup")
        window.location.reload()
        console.log(createuser)
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
    window.location.reload()
    console.log(LogiUser)
});

logout.addEventListener("click", async () => {
    const userlogout = await signOut(auth)
    alert("signout succsseful")
    window.location.reload()
})

postupload.addEventListener("click", async () => {
    try {
        const creratePOST = {
            title: title.value,
            description: description.value,
            category: category.value,
            postImage: postImage.files[0]
        }
        // Metadata for the file
        const metadata = {
            contentType: postImage.files[0].type, // Dynamically set content type
        };

        // Create a reference to the file
        const storageRef = ref(storage, `images/${postImage.files[0].name}`);

        // Use uploadBytesResumable for progress tracking
        const uploadTask = uploadBytesResumable(storageRef, postImage.files[0], metadata);

        // Monitor the progress and state of the upload
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.error("Error during upload:", error.message);
                alert("Upload failed: " + error.message);
            },
            async () => {
                // Handle successful uploads
                creratePOST.postImage = "";
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                creratePOST.postImage = downloadURL;
                console.log('File available at', downloadURL, creratePOST.postImage);
                console.log("proosees")
                await addDoc(collection(db, "post"), creratePOST);
                alert("Post is uploaded successfully!");
                window.location.reload()
            },
        );

    } catch (error) {
        console.error("Error:", error.message);
    }
});





const renderData = async () => {
    const getData = await getDocs(collection(db, "post"))
    getData.forEach((doc) => {
        // console.log(doc.data())
        const { title, description, postImage, category } = doc.data()
        perantData.innerHTML += `
     <div class="card" ">
      <img src="${postImage}" class=" card-img-top" alt="...">
      <div class="card-body">
        <h4>${title}</h4>
        <p>category : ${category}</p>
        <p class="card-text">${description}</p>
        <div class="d-grid gap-2">
          <button class="btn btn-warning" type="button" onclick="edit('${doc.id}')">Edit</button>
          <button class="btn btn-danger" type="button" onclick="deleete('${doc.id}')">Delete</button>
        </div>
      </div>
    </div>
        `
    });

}
const edit = async (ele) => {
    try {
        console.log(ele)
        const title = prompt("Enter Your Updated title")
        // const description = prompt("Enter Your Updated description")
        const collection = doc(db, "post", ele)
        const update = await updateDoc(collection, { title: title })
        alert("Data is Updated")
        window.location.reload()
    } catch (error) {
        console.log(error.message)
    }
}
const deleete = (ele) => {
    const collection = doc(db, "post", ele)
    const deleteData = deleteDoc(collection)
    alert("Data is Deleted")
    window.location.reload()
}

// renderData()   this function is used to get data from firebase and show on the screen
renderData()

window.edit = edit
window.deleete = deleete

