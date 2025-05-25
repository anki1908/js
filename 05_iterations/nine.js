const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval : ${currval}`);
//
//    return acc + currval
//}, 0)

const myTotal = myNums.reduce ( (acc, curr) =>  acc+curr , 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "dress1",
        price: 999
    },
    {
        itemName: "dress2",
        price: 2999
    },
    {
        itemName: "dress3",
        price: 1999
    },
    {
        itemName: "dress4",
        price: 4999
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);
