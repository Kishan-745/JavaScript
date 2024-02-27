const marvel = ["thor", "spiderman", "iron"]

const dc = ["superman","flash","batman"]

// marvel.push(dc) //existing array me add krke return krta h
// console.log(marvel);
// console.log(marvel[3][1]);

// const all = marvel.concat(dc)
 //existing array me koi change nhi krta h ye new aaray return krta h concatenate krne ke baad
// console.log(all);

// const allheros = [...marvel, ...dc] //spread all element of both arrays means combine both arrays element
// it is not an array all element behave like individual ho gye h
// console.log(allheros);

const arr1 = [1,2,3,4, [4,5,6], [6,7,[3,5]]]
const arr2 = arr1.flat(Infinity)
// console.log(arr2); 

console.log(Array.isArray("kishan")) // isArray is confirmed that given data is array or not
console.log(Array.from("kishan")); //from is used to conert given data into array

// FOR INTERVIEWS**************

console.log(Array.from({ name: "kishan"})); //hme dena padega ki keys ya value ki array form banaye
// agar array nhi bana payega to empty array return krega like this=>[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // (.of) is used toconvert the multiple variables into array