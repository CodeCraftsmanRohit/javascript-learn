let score="33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber=Number(score)

console.log(typeof valueInNumber)
console.log(typeof (valueInNumber))
console.log( valueInNumber) //NaN -> if kisi number me convert nhi ho skta

//"33"=>33
//"33abs"=>NaN
//true=>1;false=>0

let isLoggedIn=1
 isLoggedIn="rohit"
 isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

//1=>true ; 0=> false
// ""=>false
// "hitesh" => true

let someNumber =33

let stringNumber =String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *********************** OPERATIONS *******************

let value =3
let negValue=-value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2="hitesh"

// let str3=str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+"2")

// console.log("1"+2+2)
// console.log(1+2+"2")

console.log(+true) // 9 laga kar data type convert hua h from boolean to int
console.log(-"") // 9 laga kar data type convert hua h from boolean to int

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
++gameCounter
console.log(gameCounter)

//prefix and postfix