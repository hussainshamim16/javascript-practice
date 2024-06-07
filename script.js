
console.log('code Run');
console.log(window);


// 1 chapter Adding alert in js

// alert('WEll come My WEb page');


// 2 chapter Variables for Strings

// var name = "hussain";
// var nationality = 'pakistan';

// console.log(name , nationality)

// alert(name);

// 3  chapter Variables for Numbers

var kg = 2;
var newKg = kg + 6;
console.log(newKg);

// sexond prec

var whight = '20'; // not a number start +
var sum = 22 + whight;
console.log(sum);


// 4 chapter Variable Names Legal and Illegal

var naMe = 'camelCase';


// 5 chapter Familiar operators
 
var num1 = 2+2; 
var num2 = 2-2; 
var num3 = 2/2; 
var num4 = 2*2; 
var num5 = 2%2; 

 console.log(num1,num2,num3,num4,num5);

 // 6 chapter Math expressions Unfamiliar operators
 
// (+)
 var ham = 2;

 var newHam = ham++ ;

 console.log(ham);

// (-)
 var am = 2;

 var newam = am-- ;

 console.log(am);

 // 7 chapter Eliminating ambiguity

 var jama =  8 + 4; 
 var sama = 2 + 9 * 7; 
 var gama = ( 2 + 2 +  9); 
 var nama = (2 + 2) * (9 + 8); 
 var mama = (( 2 + 2 + 9 ) + 8 * 4); 

 console.log(jama, sama, gama, nama ,mama)

 // 8 Concatenating text strings

// var user = 'hussain ';
// var banger = '!';
// var thanks = 'thanks ';

// alert(thanks  + user  + banger);

// 9 Prompts

// var userName = prompt('your name');
// var userClass = prompt('your class');

// console.log(userName + ' is in class ' +userClass);


// 10 if statements

// var Userio = prompt('what is full form of js') ;
// if(Userio === 'javascript'){
//     alert('you are correct');
// }

// var bankCheak = prompt('your ammount is')
// if(bankCheak){
//     console.log('your balance is 700$');
//     console.log('payde ammount is ' + bankCheak);    
// }

//// complete 10 chapter with test ; 

// start 11th to 20 chapter 

//  11 comparesion operator

 //('===') //equal
 //('!==') //not equal
 // > is greater than
 // < is less than
 // >= is greater than or equal to
 // <= is less than or equal to

 var firstnumber = 5;
 var secondNmuber = 5;
 if(firstnumber === secondNmuber){
    console.log('its equal');
 }

//  12 if/else and else/if statements

// var smit = prompt('saylani mass it traning The short form of this program');
// if(smit === 'smit'){
//     console.log('yes you are right' );
// }
// if(smit !== 'smit'){
//     console.log('no you are rong' );
// }

// java script was invented by brendan eich in 1995 it was develop for natscap 2

// var train = prompt('js is ?');
// if(train === 'programming language'){
//     console.log('yes you are right' );
// }
// else{
//     console.log('no you are rong' );
// }

// var math = prompt('2 x 14 is ?');

// if( math == 28){
//     console.log('yes you are correct');
// }else if (math == 22){
//     console.log('nice');
// }else{
//     console.log('fail');
// }

// 13 testing sets of conditions

// var army = prompt('Do you want to join the army?')
// var armyAge = prompt('your age');
// var armyeducation = prompt('your education');
// var armyHeight = prompt('your height');

// if(army = 'yes' && armyAge > 17 && armyHeight === '6 feet' && armyeducation >= 'master'){
//     console.log('You can apply');
// }else if (army = 'yes' && armyAge < 18 && armyHeight == '6 feet' && armyeducation == 'master'){
//     console.log('no you can not apply');
// }else{
//     console.log('You are not eligible to apply.')
// }

// 14 if statements nested

//  var zbra = 5 ;
//  var ont = 5 ;
//  var shair = 3;
//  var hati = 9;
//  var lomri = 6;
//  var hiran = 19;


//  if(zbra === ont){
//    console.log('korangi zoo');
//    if(hiran === ont ){
//       console.log('landhi zoo');      
//    }else{
//       console.log('mega zoo')
//    }
//  }else{
//    console.log('Kmc zoo');
//  }

///loops
// document.write("<h1>2 x 1 = 2</h1>");
// for(i=1; i<=10 ; i++){
//    document.write("2 x " + i + ' = ' + i*2 +'<br />'+'<br />');
// }

// 15 Arrays

// var cars = ['toyota' , 'honda' , 'suzuki'];
// cars.shift('first remove');
// cars.unshift('first add');
// cars.pop('last remove');
// cars.push('last add');
// cars.splice(0,2);
// var cc = cars.slice(0,1);
// console.log('cc')
// console.log(cars);

// 16 Arrays Adding and removing elements

// var zbara = ['hello','bello','sello','jello'];
// zbara.pop();
// zbara.push('yellow');
// console.log(zbara);

// 17 Arrays: Removing, inserting, and extracting elements

// var bike = ['uinque','honda','yamaha','superstar'];

// bike.shift();
// bike.unshift('unique');

// bike.splice(0,3 ,'toyota', 'suzoki','corrola')
// var nobikeNocar = bike.slice(0,0)
// console.log(nobikeNocar)


// 18 for loops

// var platesomilk = 2;  
// var animal = 6;


// var dog = 'meet';
// var cat = 'meet';

// if(dog === cat){
//    console.log('drik milk')
// }

// if (platesomilk === animal){
//    console.log('drinking');
// }else{
//    console.log('please wite iam founding plates')
// }
// if (platesomilk === 6){
//    console.log('start drinking');
// }
// else if (platesomilk + 4){
// console.log('ready to drink');
// }

// for(var platesomilk = 0 ; platesomilk < 6 ; platesomilk++){
//    console.log('platesomilk,'+ platesomilk);
   
// }

// if(platesomilk === 6){
//    console.log('khaly bhai khaly')
// }


var car = 'gari mey petrol nhi hey';
var bike = 'gari mey petrol nhi hey' ;

var petrol = 'full';

// for(var i= 0 ; i <= 4 ; i++);

if(car === bike){
   alert('tanki '+petrol);
}
if(petrol === 'full'){
   console.log('gari is not define')
}

// 19 for loops: flags, Booleans, array length, and break

// var userAgeChaker = prompt('your age');
// var Userpoint = confirm('you are able to use this web')
// var UserData = ["Hussain","0316xxxxx","webDev","Pakistan"]

// for(i=0; i<2;i++){
//    if(userAgeChaker > 17 && Userpoint === true){
//       console.log("you are able");
//       break
//    }else{
//       console.log("nhi");
//    }
// }

// 20 for loops nested

// var name = prompt('your Name');
// var instituteName = prompt('your institute Name');

// var fullName = [name,instituteName]

// for(i=0;i<2;i++){
//    console.log(fullName[i]);
//    for(j=0;j<1;j++){
//       console.log("User Data Is Here");
//    }
   
// }

//21 Changing case

var upper ="hussain";
console.log(upper.toUpperCase());

// 22 Strings: Measuring length and extracting parts

var gig = "portfolio";
console.log(gig.slice(0,5));

// var country = prompt("lower to upper case");
// var firstLate = country.slice(0,1).toUpperCase();
// var lastLate = country.slice(1).toLowerCase();
// var same = firstLate+lastLate;
// var same = country.slice(0,1).toUpperCase() + country.toLowerCase();
// console.log(same);


// 23 Strings: Finding segments
// heighlight = " veritatis "
// var peragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis nostrum voluptate voluptas quas, repellendus, in excepturi sunt inventore officia ipsam et? Totam quae debitis nam eius voluptatum, nihil rerum."

// for(var i = 0 ; i<=peragraph.length; i++){
//    console.log(peragraph.slice(0,61)+"hussain"+ peragraph.slice(70,-1));
// }

// if(peragraph.slice(i, i+9)==="veritatis"){
//    console.log(i)
// }
// console.log(peragraph.slice(0,8))


// 24 finding segments
var find = "SMIT";
console.log(find.indexOf("I"));

var firstName = "hussain shamim"
// console.log(firstName.slice(0)); old practice
// console.log(firstName.charAt(8)); best practice
// console.log(firstName.charAt(firstName.length -2));
for(var i = 1; i<= firstName.length; i++){
   
   if(firstName[i] === "n"){
      console.log(i)
   }
}


// 25 Replacing characters

// var rep = "He code above finds a single character at index-0 (the beginning) of the string represented by the variable firstName and assigns it to the variable firstChar The following code finds the last character in the string."
// // console.log(replace);
// for(var h = 0; h <= rep.length; h++){
//    console.log(rep.slice(h, h+6))
//    if(rep.slice(h, h+6) === "single"){
//       console.log(h)
//    }
// }
// console.log(rep.slice(0,22) + "EQual" + rep.slice(28 ,-1));

// New Method replace it

// var pakage = "The first string inside the parentheses is the segment to be replaced. The second string "
// var newText = pakage.replace("inside", "ander")
// console.log(newText);

// Rounding numbers

var numberOfStars = Math.round(scoreAvg);
var scoreAvg = Math.round(scoreAvg);

var number = 123.4567890;
var roundNumber = Math.round(number)
console.log(roundNumber);

// conacting
var samee = 98.9;
var dame = Math.round(samee);
var hame = Math.floor(samee);
var fame = Math.ceil(samee);
console.log(dame , hame , fame);

// Generating random numbers
// var table = 2 ;
var tyble = Math.random();
console.log(tyble)

//  Converting strings to integers and decimals

var str = "200";
str = +"200"; // first practice number 
str = parseInt(str); // second practice number 
console.log(typeof str);

// Converting strings to numbers, numbers to strings
var NUmbb = 12;
NUmbb = String(NUmbb)
console.log(typeof NUmbb);

// Controlling the length of decimals
var namber = 22.999998;
namber = namber.toFixed(9)
console.log(+namber);

// 31 Getting the current date and time
// get date
    var date = Date.now();
    console.log(date,"date");
    // get day
    var gat = new Date();
    var dayNames = ["sun","mon","teu","wed","thu","fri","Sat"]
    console.log(dayNames[gat.getDay()],"day");

   //  32 Extracting parts of the date and time 

    // get month
    console.log(gat.getMonth());
    // get full year
    console.log(gat.getFullYear());
    // get Hours
    console.log(gat.getHours());
    // get minutes
    console.log(gat.getMinutes());
    // get second
    console.log(gat.getSeconds());
    // get mili second
    console.log(gat.getMilliseconds());
    // get time
    console.log(gat.getTime());

    // 33 Specifying a date and time

    var dob =  new Date("10 jul,2009").toString()
    console.log(dob.slice(0,15),"DOB hasnain")
   //  ,"hussnain"

    /// 34 Changing elements of a date and time

    var changeAllMethodsTime = new Date();
    changeAllMethodsTime.getFullYear(2001)
    console.log(changeAllMethodsTime)

   //  35 functions

  function abcd(){
console.log("block of estatment")
   }

   abcd()

   //36 fnc Passing them data
//perameter or argument

var speaking = "english & Urdu"
function speaker(){
   // alert(speaking.nodeVluea = "hard");
   console.log(speaking)
}
speaker()

var inputI =  prompt("Chose Your Function","party,shaadi,disco");
function fancti() {
   switch (inputI) {
      case "party":
         console.log("WElcome to party function")
         break;
         case "shaadi":
            console.log("WElcome to shaadi function")
            break;
            case "disco":
               console.log("WElcome to disco function")
               break;
   
      default:
         console.log("no function")
         break;
   }
}
fancti()

// 37 Functions: Passing data back from them

var totalMarks = 100;
var studentMarks = 1;
function result(){
   if(studentMarks == totalMarks){
      console.log("A plus 100%")
   }else if(studentMarks >= 65) {
      console.log("pass")
   }
   else if(studentMarks < 30) {
      console.log("fail")
   } 
   else{
      console.log("fail 0%")
   }
}
result();

// 38 Functions Local vs. global variables

var Local = "Local";
function vari(){
   var global = "global";
   console.log(global)
}
console.log(Local)
vari()

// 39 - 40 switch estatements
var userInput = +prompt("enter your school class")
switch (userInput) {
   case 1:
      console.log('you are in one class')
      break;
   case 2:
      console.log('you are in two class')
      break;
   case 3:
      console.log('you are in three class')
      break;
   case 4:
      console.log('you are in four class')
      break;
   case 5:
      console.log('you are in five class')
      break;
   case 6:
      console.log('you are in six class')
      break;
   case 7:
      console.log('you are in seven class')
      break;
   case 8:
      console.log('you are in eight class')
      break;
   case 9:
      console.log('you are in nine class')
      break;
   case 10:
      console.log('you are in ten class')
      break;

   default:
      console.log("your School class is not found!")
      break;
}

// 41 while loop

var i = 0;
while (i <= 10) {
   console.log("while Run" + i)
   i++;
}

// 42 do while loop

var i = 0;
do{
   console.log("do Run" + i)
   i++;
}
while (i <= 10);

// 43 Placing scripts

// three types of placing js internal external inline

// 44 commenting

// one line

/*multiple
line*/


// 45 Events: link
/*<a href = "JavaScriopt:void(0)">click</a>
<a onclick = "submit(this)">submit</a>*/

// 50 Setting field values
var ggae = prompt("your City postel Code");
switch(ggae){
   case "2990":
      console.log ("karachi");
      break;
      default:
         console.log("not define")
         break;
}

