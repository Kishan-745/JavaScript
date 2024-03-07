
// Arrays specific loops:::=>

//                    *********for of ****************

// ["", "", ""] string form array
// [{}, {}, {}] object inside the array

// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//map is like array 

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United State of America")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,value);
// }
// map is iterable using for of loop

// const myObject={
//     game1 : "NFS",
//     game2 : "Spiderman"
// }
// for (const [key,value] of myObject) {
//     console.log(key,value);
// }
// object is not iterable using for of loop

//                            ***** For in loop***** 

//it is used for Object

// for in loop is used to return or print key and using key print keys value
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
//    console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ['js','rb', 'py','cpp']

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// for of loop => array
// for in loop => objects ke liye



//                                *****for each loop*****


const coding = ['js','rb', 'py','cpp','java'];

// coding.forEach( function (item) { 
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function PrintMe (item){
//     console.log(item);
// }
// coding.forEach(PrintMe)

// coding.forEach( (item, index, arr) => { 
//     console.log(item, index, arr);
// } )

// [{}, {}, {}]

const myCoding =[
    {
        courseName : "javaScript",
        courseFileName : "js"
    },
    {
        courseName : "java",
        courseFileName : "java"
    },
    {
        courseName : "python",
        courseFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.courseName);
} )