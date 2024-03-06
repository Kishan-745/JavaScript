
const user = {
    username: "kishan",
    price :999,
     
    // this keyword => refer to current contest which is inside the curely braces{} 
    welcomeMessages : function(){
        console.log(`${this.username} , welcome to website`); 
        console.log(this);  //here its give all the objects and their keys and value
    }
}
// console.log(user.price)
// user.welcomeMessages()
// user.username = "sam"
// user.welcomeMessages()

// console.log(this); //here it give empty like=> {} 

// function chai(){
//     let username="kishan"
//     console.log(this.username); //gives:undefined, function ke andr this keyword use nhi kr paa rhe h
//     console.log(this); 
// }

// const chai = function(){
//     let username="kishan"
//     console.log(this.username);
// }

//   const chai =  () => {
//     let username="kishan"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

//implicite return mean we not use return keyword we directly write operation

// explicite return mean we use return keyword in curly braces
// const addTwo = (num1,num2) => num1+num2;
// const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => (  {username:"kishan"}  ) // paranthises () me rapp krna padega tabhi object ko return kr sakte h

// console.log(addTwo(3,4))