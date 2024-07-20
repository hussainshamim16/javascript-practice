// simple function 

let simpleFuction = function (pera1, pera2) {
    console.log(pera1 + pera2)
}
simpleFuction(20,10);


let returnFnc = function (pera1, pera2) {
    return pera1*pera2
}
let murge = returnFnc(20,10);
console.log(murge)

// peramitorize
const arrowFnc = (peraa,peraax)=>{
    console.log(peraa + peraax)
}
arrowFnc(20,3);

// return
const rturnArrowFnc = ()=> 20 + 30;
const print = rturnArrowFnc();
console.log(print);

// un pera mitorize
const UNpera = _ => {
    console.log("with out peramitor")
};
UNpera()
// console.log(print)

