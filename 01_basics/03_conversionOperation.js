//here scre is string

let score = "50asd"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// score is null

let score1 = null

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// score is undefined

let score2 = undefined

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

//score is a boolean value

let score3 = true

console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// "50" => 50
// "50asd" => NaN
// true => 1;  false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "Ankita"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

// 1 => true; 0 => false
// "" => false
// "Ankita" => true

let someNumber = 50

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

