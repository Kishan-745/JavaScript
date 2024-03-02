// const tinderUser = new Object() // its singlton method to define an objects 
//output => {} empty object

const tinderUser = {}  //non singlton  >> output => {} empty objects /////both return same

tinderUser.id = "123abc"
tinderUser.name = "krish"
tinderUser.loggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userName :{
            firstName : "kishan",
            lastname : "kashyap"
        }
    }
}
// console.log(regularUser.fullname.userName.firstName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
// const obj3 = {obj1 , obj2} //obj1 and obj2 ko ek sath jaise diya h waise hee mila dega
// const obj3 = Object.assign({}, obj1, obj2) // (target,source)its copy all value in target & return target object
const obj3 = {...obj1, ...obj2} // spread operator used most of time
// console.log(obj3);

// DBMS se data kaise aati h  .....array of object ke form me aati h array aati h
const user = [ 
    {
        id:1,
        email: "ki@134.com"
    },
    {
        id:2,
        email: "ki@134.com"
    },
]
// access the values from array of object
user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //object ke keys ki ek array bna dega aur uspr array ke method lga skte h
// console.log(Object.values(tinderUser)); //obj ki value ki ek array bna diya
// console.log(Object.entries(tinderUser)); //object ke keys aur uske value ko ek array me kr detaa h

// console.log(tinderUser.hasOwnProperty('loggedIn'));

// de-structure of object***********
const course= {
    courseName: "js in hindi",
    price:"999",
    courseInstructor: "kishan"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor)

//********** JSON API ***********
// json structure 

// {
//     "name" : "kishan",
//     "courseName":"js in hindi",
//     "price":"free"
// }

// api also in array form 
[
    {}
]