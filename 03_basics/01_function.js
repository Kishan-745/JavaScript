
function SayMyName (){
    console.log("k");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}

// SayMyName //its reference
// SayMyName() //execution
// SayMyName()

function AddTwoNumber (number1, number2){  //number1 &numer2 is parameters
     console.log(number1+number2);
    // return number1+number2;
}
// AddTwoNumber(4,3)  // 7 >>4,3 is arguments 
// AddTwoNumber(4,"3")  //43
// AddTwoNumber(4,null)  //4

const result = AddTwoNumber(3,4) 
// console.log(result);  //output=> undefined because function not return anyvalue its printing

// function ki definition jab banate h usme jo value dete h use "Parameters" bolte h 
// function ko call krte time jb value dete h usee "Argument" bolte h

function loginUsarMessage (username){
    if(username===undefined){
        console.log("please enter username");
        return;
    }
    return `${username} just logged In`
}
// console.log(loginUsarMessage("kishan"));
// console.log(loginUsarMessage()); //without argumnet its give undefined

function calculateCartPrice(...num1){ //... three dot is rest operator used for passing more parameter
    return num1
}
console.log(calculateCartPrice(200,400,600));

//Using object in function
const user = {
    username: "kishan",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject( {
    username:"kk",
    price:219
 } )

 const myNewArrays =[200,100,300,500,600]

 function returnsecondValue(getArray){
    return getArray[2];
 }
 console.log(returnsecondValue(myNewArrays))
 console.log(returnsecondValue([100,200,900]))

 // scope

 
if(true){
    let a=10;
    const b=22;
    var c=3;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="kishan"

    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()