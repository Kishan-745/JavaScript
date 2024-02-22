// let score = 33;
// let score = "33"
// let score = "33abc" //after convert into number it give not a number (NaN)
let score = null 
// score = undefined
score = "kishan" // not a number
// console.log(score);

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber= Number(score);

// console.log(typeof valueInNumber)
// console.log(valueInNumber);

// "33"=> 33 
// "33abc"=> NaN

let isLoggedIN = 1
isLoggedIN = ""
isLoggedIN = "kishan"

let booleanLogged = Boolean(isLoggedIN);
console.log(booleanLogged);

// 1=> true 0=>false
// "" => false
// "kishan" => true

/* ***************** Operations *************** */

let value = 3;
let negvalue= -value
// console.log(negvalue);

let str1="kishan"
let str2=" kashyap"

let str3=str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2 ); //122
// console.log(1 + 2 + "2");  //32
// agr phle string h to aage wale bho string ki tarah treat honge 
// aur agr string last me h to starting me jo type uski trh treat hoga

// console.log(+true); gives 1 kyuki converstion type ki trh treat krta h
// console.log(+""); gives =>false
// ye sb production me use nhi hota h only exam ke liye puche jate h

