const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.89645
// console.log(otherNumber.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));


// ++++++++++++++++++++ Maths ++++++++++++++++++++++++

//  console.log(Math);
//  console.log(Math.abs(-5));
//  console.log(Math.round(7.8));  maximum time used in production
//  console.log(Math.ceil(6.2));
//  console.log(Math.floor(12.9));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 +1));

const min = 10
const max = 20

console.log(Math.floor( Math.random() *(max-min +1) ) + min);