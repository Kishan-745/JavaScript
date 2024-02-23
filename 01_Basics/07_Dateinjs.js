let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString());

console.log(typeof myDate); //type of myDate is Object

// let myCreatedDate = new Date(2024, 1, 23);

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 1, 23, 5, 4);
let myCreatedDate = new Date( "2024-01-23");
// let myCreatedDate = new Date( "01-12-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);

// console.log(newDate.getDate());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})         