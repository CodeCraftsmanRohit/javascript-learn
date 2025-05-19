// const tinderUser=new Object()    --> ye ek singleton object h!!
// const tinderUser={}  // --> ye ek non single ton object hai

// tinderUser.id="132"
// tinderUser.name="johhnyy"
// tinderUser.isLoggedIn=false;
// console.log(tinderUser)

// const regularUser={
//     email:"abc@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"rohit",
//             lastname:"choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// obj3={obj1,obj2}
// console.log(obj3)
// const obj3=Object.assign({},obj1,obj2)  //target,source

const obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))

console.log(obj3.hasOwnProperty('3'))



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//deconstruction!!
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]