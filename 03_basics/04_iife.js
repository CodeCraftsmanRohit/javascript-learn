//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`BD CONNECTED`);

})();

//()()  --> first parenthesis me function ki definition and second me function ki executon!


// global scope ke variables h  uske pollution ko hatane ke liye iife ka use kiya gya h

(()=>{
    console.log(`bd 2 connected`);

})();
((name)=>{
    console.log(`${name} , hello`);

})("rohit");