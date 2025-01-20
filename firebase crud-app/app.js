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
    console.log(LogiUser)
});

logout.addEventListener("click", async () => {
    const userlogout = await signOut(auth)
    alert("signout succsseful")
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
        const { education, email, lastName, name, religin } = doc.data()
        perantData.innerHTML += `
     <div id="child">
            <p>Name : ${name}</p>
            <p>LastName : ${lastName}</p>
            <p>Email : ${email}</p>
            <p>Education : ${education}</p>
            <p>Religin : ${religin}</p>
             <button type="submit"  onclick="edit('${doc.id}')">edit</button> 
             <button type="submit"  onclick="deleete('${doc.id}')">delete</button> 
        </div>
        `
    });

}
const edit = async (ele) => {
    console.log(ele)
    const EditName = prompt("Enter Your Updated Name")
    const collection = doc(db, "appuser", ele)
    const update = await updateDoc(collection, { name: EditName })
    alert("Data is Updated")
}
const deleete = (ele) => {
    const collection = doc(db, "appuser", ele)
    const deleteData = deleteDoc(collection)
    alert("Data is Deleted")
}

// renderData()   this function is used to get data from firebase and show on the screen
renderData()

window.edit = edit
window.deleete = deleete

