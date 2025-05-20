let a=10
// const b=20
// var c=300


if(true){
    let a=50
    const b=20
    //  c=30
    console.log(a);

}


console.log(a);
// console.log(b);
// console.log(c);


// chrome ke console me variable declare krnge to vo alag h and code-editor me node ke through jab run krnge tb vo alag h



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}