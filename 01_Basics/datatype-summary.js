// Primitive datatype => it is call by value.oringinal data me change nhi krte h,copied value me change hota h


// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// js is dynamic type language because its check data type during runtime

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
let temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Refrence  or (non primitive)

// Array, Object, Functions

//Array
let heros = ["shakitman", "naagraj", "doga"];
let myobj={
    name:"kishan",
    age:21,
}

let myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof myFunction);

// type of primitive and non primitive data type  

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) => gives copied value 
// heap (non primitive) => gives original value referece,original value me change hoga 
