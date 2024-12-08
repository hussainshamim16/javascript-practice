

// Destructuring in array 
const studentData = ["Aleem uddin","Shamim Uddin","Ambri Bano","hussain","hassnain","arzoo","ronaq","muntha","hunain"];
let [first,second,thired,fourth,five,six,seven,eight,nine] = studentData;
console.log(second);


// Destructuring in object 
const userEmails = {
    userOne : "alirehman@gmail.com",
    userTwo : "hassnainshamim@gmail.com",
    userthree : "alizbano@gmail.com",
    userfour : "aqeeltraeen@gmail.com",
    userFive : "madiaafzal@gmail.com",
    userSix : "RehmatAli@gmail.com",
    userEight: "Chacho457@gmail.com",
}
// console.log(userEmails.userOne)
let {userOne,userTwo,userthree,userfour,userFive,userSix,userEight} = userEmails;
console.log(userTwo)
