// const name="hitesh";
// const repoCount=50

// console.log(`Hello my name is ${name}` )

// const stringNme=new String("Rohit");

// console.log(stringNme)
// console.log(stringNme[0])
// console.log(stringNme.__proto__)
// console.log(stringNme.length)
// console.log(stringNme.toUpperCase)

// console.log(stringNme.charAt(2))
// console.log(stringNme.indexOf('t'))
const gameName = new String('hitesh-hc-com')
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-1, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))