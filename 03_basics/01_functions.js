// below mentioned code is a function till 10 and its defination
// functuon is a keyword, sayMyName is the name of function, (){} - this is  syntax of funtion
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    console.log("A");
}

//sayMyName()

//function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2);
//}
// num1 & num2 are aprameters
//addTwoNumbers(4, 5)
// the numbers is paranthesis are arguments

function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result
// if i give any value after result then it'll not print
}
const result = addTwoNumbers(4, 5)
//console.log("Result: ", result);

function loginUserMessage(username) {
    if (username=== undefined) {
      console.log("Please enter a username");
      return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ankita"))
//console.log(loginUserMessage(""))
//console.log(loginUserMessage())

function calculateCartprice(val1, val2, ...numb1) {
    return numb1
}
/// here ... is ised as rest operator which is working to built a budles of distributed things
//console.log(calculateCartprice(200, 400, 500, 250, 2000));

const user1 = {
    username: "Ankita",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user1)

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 400, 5000]));
