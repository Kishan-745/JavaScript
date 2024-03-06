
// iife imediately invoke function expression

// global scope se value akar function ko pollute krti h usko rokne ke liye iife ka use krte h
// ( function ki definition )(execution) ....*syntax for iife=> ()()

( function chai (){
    console.log("DB CONNECTED");
})(); //need to end the imediate invoke function by semicolon(;)
// chai()

( () => {
    console.log(`db connected`);
} )();

( (name) => {
    console.log(`db connected ${name}`);
} )("kishan")