//singleton -- literals ki trah nhi bnta h!
//constructor se bnega to singleton bnega!
//Object.create

//object literals
const mySmbol= Symbol(1230);
const JsUser={
    name:"Hitesh",
    [mySmbol]:1230,
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser)
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);  //function execute nhi hua h function ka reference pass hua h
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());