// array

const myArr = [5, 6, 7, 8, 9]
const myalpha = ["ab", "bc", "cd", "ef"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[2]);

// Array Method

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(20));

//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);


// slice, splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("B ", myArr);


