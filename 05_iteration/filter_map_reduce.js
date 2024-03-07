//***************************** / filter reduce map / **********

// const coding = ['js','rb', 'py','cpp','java'];

// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })
// console.log(value); // for each not return any value

// const myNum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using filter

// const newNum = myNum.filter( (num) => num > 4 )
// const newNum = myNum.filter( (num) => {
//     return num > 4
// } )

// console.log(newNum);

// using for each loop

// const newNums = []
// myNum.forEach( (num) =>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History' )
//   userBooks = books.filter( (bk) => { 
//     return bk.publish >1995 && bk.genre==='History' 
// } )
//   console.log(userBooks);

// **************/ map /***********//

//   const myNum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const newNum = myNum.map( (num) => num+10 )
// const newNum = myNum 
//                   .map( (num) => num*10)
//                   .map( (num) => num+1 )
//                   .filter( (num) => num > 40)
//   console.log(newNum); 

//  *********************/ reduce /********* 
const myNum = [1, 2, 3]
//  const myTotal = myNum.reduce( function (acc, currval) {
//         console.log(`acc: ${acc} and currval : ${currval}`);
//         return acc + currval  
//  } , 0)

const myTotal= myNum.reduce( (acc, curr) => acc + curr , 0 ) 
 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    },
]

const total=shoppingCart.reduce( (acc, item) =>  acc + item.price , 0)
console.log(total);