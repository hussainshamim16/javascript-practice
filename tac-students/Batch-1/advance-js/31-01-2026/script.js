console.log("This");



// this = “current owner / jis ke saath function chal raha ho”
// Matlab function kis cheez ke context mein chal raha hai.


// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.

// ye this user ko uthaey ga kion key ye aike object mey hey
let user = {
    name: "Ali",
    show() {
        console.log(this.name);
    }
};

user.show();

// ye this arrow function or normal function ka diffrence bataay ga 
const user2 = {
  name: "Ali",
  normal() {
    console.log(this);
  },
  arrow: () => {
    console.log(this);
  }
};

user2.normal();
user2.arrow(); 

