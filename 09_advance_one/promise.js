// //A Promise in JavaScript is like a container that waits for a result (success or failure) from an asynchronous task (like fetching data, waiting for a timer, or reading a file).
// const promise1= new Promise(function(resolve,reject){
//     //do an async task
//     // db calls, cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consume");

// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();

//     },1000);
// })
// .then(function(){
//     console.log("async 2 resolved");

// })


// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"rk@gmail.com"});
//     },1000);
// });
// promise3.then(function(user){
// console.log(user);
// });


// const promise4 =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"rohit",password:"123"});
//         }else{
//             reject('ERROR : something went wrong')
//         }
//     },1000)
// });
// promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>console.log("The promise is either resolved or rejected"));

// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"js",pass:"123"});
//         }else{
//             reject('error:js went wrong');
//         }
//     },1000);
// });

// async function consumePromise5() {
//     try{
//         const response=await promise5;
//         console.log(response);

//     }
//     catch(error){
//         console.log(error);


//     }
// }
// consumePromise5();



// The fetch() automatically returns a Promise — you don’t need to manually write new Promise().
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));






// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//     console.log(results);
// })
// .catch((error) => {
//     console.log(error);
// });
