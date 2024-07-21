

// Destructuring in array 
const studentData = ["hussain","hassnain","arzoo","ronaq","muntha","hunain"];
let [first,second,thired,fourth,five,six] = studentData;
console.log(second);


// Destructuring in object 
const userEmails = {
    userOne : "alirehman@gmail.com",
    userTwo : "hassnainshamim@gmail.com",
    userthree : "alizbano@gmail.com",
    userfour : "aqeeltraeen@gmail.com",
    userfour : "madiaafzal@gmail.com"
}
// console.log(userEmails.userOne)
let {userOne,userTwo,userthree,userfour,} = userEmails;
console.log(userTwo)
