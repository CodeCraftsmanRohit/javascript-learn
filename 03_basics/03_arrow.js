const user={
    username:"rohit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);
const chai=()=>{
    let username="rohit"
    console.log(this)
}

// chai()

// const addtwo=(num1,num2)=>{
//      return num1+num2

// }                    // curly braces use krnge to return keyword use krna hoga   //explicit
// const addTwo =(num1,num2)=> num1+num2
const addTwo =(num1,num2)=> (num1+num2)   // parenthesis use krnge to return keyword nhi likna prega  //implicit

// const addTwo=(num1,num2)=>({username:"rohit"})

// console.log(addtwo(2,8))


// const arr=[1,2,3]
// arr.forEach()