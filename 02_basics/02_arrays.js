const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// console.log(marvel)
// marvel.push(dc);
// console.log(marvel)


// marvel.concat(dc)//returns new array
// console.log(marvel.concat(dc))

// const allHero=[...marvel,...dc]
// console.log(allHero)

// const arr=[1,2,3,[4,5,6],7,[6,[4,5]]]
// const arr2=arr.flat(1)
// console.log(arr2)

console.log(Array.isArray("rohit"))
console.log(Array.from("rohit"))
console.log(Array.from({name:"rohit"}))   //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))