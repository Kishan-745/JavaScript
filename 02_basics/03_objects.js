// object do tarah se bante h 1. literal 2.contructor ki tarh

//singlton => constructor se banega object usse hee singleton khte h
//  ex. of constructor method to create a obj => object.create

// object literal
// creating a symbol 

const MySym = Symbol("key1");

const JsUser = {
    name : "kishan" ,
    "full name" : "kishan kashyap" , //it is not accessed by using dot . method because its string type
    [MySym] : "mykey1", //it is the way to define/create a symbol in objects[its a method to define]
    age : 20 ,
    location : "gkp",
    email : "kishan@google.com" ,
    IsLoggedIn : false,
    lastloginDay : ["Monday" , "Saturday"]
}
console.log(JsUser.name); // not a good way to access the object value(using dot(.) )
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.MySym);
// console.log(JsUser[MySym]);

JsUser.email = "kashyp@!23.com"  //changed or overwrite the values
// console.log(JsUser["email"]);

// Object.freeze(JsUser)     //its freeze or locked the object value sothat u cant change the keys value
// JsUser.email =  "kishan@overwrite.com" //now its not give error but its show that u cant change the value
// console.log(JsUser);

// functions in object

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
