//arrrays

// const myArr=[0,1,2,3,4,5,true,"rohit"]

// console.log(myArr[0])
// console.log(myArr[1])
// console.log(myArr[2])
// console.log(myArr[3])

// shallow copy --> same refernce share
const myArr =new Array(0, 1,2,3)
//array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.includes(2))


// const arr=myArr.join()
// console.log(myArr)
// console.log(arr)  //type -> String


//slice,splice

console.log(myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log(myArr)

const myn2 =myArr.splice(1,3) ///original array ko manipulate kar deta h!!
console.log(myn2)
console.log(myArr)
