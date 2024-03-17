
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

var bike = ['uinque','honda','yamaha','superstar'];

bike.shift();
bike.unshift('unique');

bike.splice(0,3 ,'toyota', 'suzoki','corrola')
var nobikeNocar = bike.slice(0,0)
console.log(nobikeNocar)
