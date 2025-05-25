const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const NewNums = myNums.map((num) => num + 10) //method-1
//const NewNums2 = myNums.map((num) => { return num + 20 }) // method-2

const NewNums = myNums
                        .map((num) => num * 10)
                        .map( (num) => num + 1 )
                        .filter((num) => num >= 40
    )


console.log(NewNums);

