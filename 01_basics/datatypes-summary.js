// primitive
// 7 types: string, number, boolean, null, undefined, symbol and BigInt

//const score = 100
//const scoreValue = 100.3
//const isLoggedIn = false
//const outSideTemp = null
//let userEmail;

//const id = Symbol('123')
//const anotherId = Symbol('123')

//console.log(id == anotherId);

//const bigNumber = 78456621444425364n

// Reference (non primitive)
// Array, objects, functions

const heros = ["shaktiman", "udibaba"]
let myObj = {
    name: "jj",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(non-primitive)

let myBookname = "journeyoffairies"

let anothername = myBookname
anothername = "thedream"

console.log(myBookname);
console.log(anothername);

let userOne = {
    email: "iam@google.com",
    upi: "iam@ybl"
}

let userTwo = userOne

userTwo.email = "me@google.com"

console.log(userOne.email);
console.log(userTwo.email);

