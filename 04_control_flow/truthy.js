const userEmail = []

//if (userEmail) {
//    console.log("Got user mail");
//} else {
//    console.log("Don't have user Mail");
//}

// falsy values
//
//false, 0, -0, BigInt 0n, "",  null, undefined, NaN
//


//truthy values
//
//"0", 'fasle', " ", [], {}, function(){},

//if (userEmail.length === 0) {
//    console.log("Array is empty");
//
//}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 5

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator

//condition ? true : false

const icePrice = 100
icePrice <= 80 ?console.log("less than 80")  : console.log("More than 80")

