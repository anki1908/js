const name = "ankita"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

const gameName = new String('ankita-kj-com')

//console.log(gameName[0]);
//console.log(gameName[3]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  ankita  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ankita.com/ankita%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('geeta'));

console.log(gameName.split('-'));
