// // test start date 21/ 02 / 2024 ; 10:53pm

// // bismillah

// //1 alert
// alert('my first js test');

// // 2 var with string

// var name = 'hussain' ;
// var pc = 'dell';

// console.log(name);
// console.log(pc);

// // 2 var with Number

// var num1 = 1;
// var num2 = 2;
// console.log(num1,num2);

// // 4 variable legal and illegal

// var camilCase = 'good prec';

// // 5 math experassions fimiliar operator

// var balance = 20;
// var bonus = 3;

// var sum = balance + bonus;
// var sum1 = balance - bonus;
// var sum2 = balance * bonus;
// var sum3 = balance / bonus;

// console.log(sum, sum1, sum2, sum3);

// // 6 math experassion  un fimiliar operator

// var blue = 2;
// var red = 3;
// var green = 5;

// var mix = green - blue + red; 
// var mxi = blue * red - green; 

// console.log(mix);
// console.log(mxi);

// // 7 concatenating text string

// var resever = 'ali';
// var order = 'pizza ';

// alert('Hi '+ resever + ' your order is ' + order);

// // 8 eliminating algiminaty

// var mathIO = (2 + 3);
// var mathUi = ((7+9) * 3) ;
// var mathTy = (7+9) + (88); 
// var mathOp = (7+9 - (10) + (2)) ;

// console.log(mathIO + ' ' + mathOp + ' ' +mathTy+' ' +mathUi );

// // 09 prompt 

// var userInput = prompt('your name');
// var ageInput = prompt('your age');

// console.log(userInput + ' ' + ageInput);

// // 10 if statment

// var project = prompt('sucsses');
// if('sucsses'){
// console.log('good');
// }

// // ch 21 changing case 

// var userPromt = prompt("your Name");
// var userNameInput = userPromt.toLowerCase(); // toUpperCase()
// console.log(userNameInput);

// ch 22 lenght/

var Name = "hussain";
// console.log(Name.length);
console.log(Name.slice(2,5));
// first index second lenght

// 23 finding segment
var peragraph = "He was addressing a pre-budget conference organised by Business Recorder in collaboration with Federation of Pakistan Chamber of Commerce & Industry (FPCCI) along with other associations at a local hotel on Sunday. Federal Finance Minister Muhammad Aurangzeb graced the occasion as chief guest, which was attended by a top businessmen of the country.";
// var peraI = peragraph.indexOf("addressing"); // lastIndexOf(SearchLastValue)
console.log(peragraph.slice(0,7)+"Monday"+peragraph.slice(18,-1));

// 24 character location

var pegra = "“Our economic team has to come with broader, most strategic and structural reforms, both in design and execution, in the administration of tax system,” he stressed.";
var pera = pegra.charAt(3);
console.log(pera);

// 25 replacing characters

var poli = "He said the IMF tax proposals are extremely weak, not in structural nature and primarily represent a tinkering with small said changes here and there and minor variations in tax rates. Our economic team has to come with broader and strategic tax reforms, he stressed."
var police = poli.replace( /said/g ,"Happy");
console.log(police);

// 26 rounding Numbers

// var number = 2.34;
var tat  = Math.round(2.4);
console.log(tat);

// ceil 

var faf =  Math.ceil(2.1);
console.log(faf);

// floor 

var hah =  Math.floor(2.9);
console.log(hah);

// 27 random Numbers

var tay = Math.round(Math.random()*10);
console.log(tay);

// 28 string to Numbers

var mam = "22";
console.log(typeof +mam);

// 29 Numbers to string

var cac = 24;
console.log(typeof cac.toString());

// 30 Numbers to string

var oi = 24.90;
console.log(oi.toFixed(1));


var dateB = document.getElementById("dateType");

function tari(elem){
   

    var div = document.getElementById("uiShow");
    elem.disabled = "true";

    var setDate = dateB.value;
    var datee = new Date(setDate);

    var current = new Date();

    var meth = current.getFullYear() - datee.getFullYear();
    
    
    div.innerHTML = "you are " + meth + " years Old"
    console.log(meth)
    
}

var perra ="The Paragraph Typing Test is an online assessment tool that evaluates an individual's typing speed and accuracy by having them type out a provided paragraph."
console.log(perra)

for(var i = 0; i<= perra.length; i++){
console.log(perra.slice(i,i+6))
if(perra.slice(i,i+6) === "Typing"){
    console.log(perra.indexOf("Typing"))
    console.log(perra.slice(0,14)+"retype"+perra.slice(14,-1))
    
}
}
// console.log(perra)

/// while loop 
console.log("whlie Loop");
var i = 0;
while(i<5){
    console.log(i)

    i++
}
// for (var i= 0; i<=5; ){
// }