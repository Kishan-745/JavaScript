// Array

// ways of creating an array==>>

const myArr=[0, 1, 2, 3, 4, 5] //numbers

const myHero = ["shaktiman", "naagraj"] //string form of array

const myArr2 = new Array(1, 2, 3, 4) //using keyword element pass in paranthises it convert it into squre bracket

// console.log(myArr2[2]);

// Arrays Methodes

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //no value pass ,it remove last element from the array

// myArr.unshift(8) //starting me element add krne ke liye
// myArr.shift()  //starting element ko a=remove krne ke liye

// console.log(myArr.includes(8)); // is element present or not
// console.log(myArr.indexOf(8)); // what is the index of element 8 

// const newarr = myArr.join() // it is convert the array into string

// console.log(myArr)
// console.log(newarr) //type of newarr is string

// slice, splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3); //slice me end range include nhi hota aur original array me no change

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // start end range include but original array change
// aur original array se range wale element nikal jaate h

console.log("C ", myArr);
console.log(myn2);