const marvel_heroes = ["thor", "black_window", "dr_strange" ]
const dc_heroes = ["wonder_woman", "batman", "superman"]

//marvel_heroes.push(dc_heroes)
// when we push it includes the pushing part as a value
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes);
//when we concat it merges the two arrays and gives a new array

const all_New_Heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_New_Heroes);
// spread oprator works like concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [1, 2, [3, 4, 5]]]

const real_array = another_array.flat(Infinity)
//console.log(real_array);
// flat concludes all the distributed arrays in one 


console.log(Array.isArray("Ankita"));
console.log(Array.from("Ankita"));
// from converts the given vale into arrays separately 

console.log(Array.from({ name: "Ankita" })); // interesting
//when programme is unable to make an array then it gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

