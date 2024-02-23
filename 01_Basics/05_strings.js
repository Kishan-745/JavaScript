const name = "kishan"
const repo = 50

// console.log(name + repo + " value");

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

// other way of declare string
const gameName = new String('kishan-kas-yap')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4) // substring me -ve value pass krne pr ye 0 se start krta h
// console.log(newString);

const anotherString = gameName.slice(-6, 4); // slicing me negative value dete h
// console.log(anotherString);

const newStr = "  kishan    "
// console.log(newStr);
// console.log(newStr.trim());

// console.log(name.replace('s', 'x'));

console.log(gameName.split('-'));
