const user = {
    username: "Ankita",
    price: 999,

    welcomeMeassage: function () {
        console.log(`${this.username} , welcome to website`);
            
    }
}
//user.welcomeMeassage()
//user.username = "Sam"
//user.welcomeMeassage()

//console.log(this);

//function chai() {
//let username; "Ankita"
//console.log(this.username);
// this works with objects only not with functions
//}
//()

//const chai = function () {
//    let username = "chunnu"
//    console.log(this.username);
//}

const chai = ()  => {
    let username = "chunnu"
    //console.log(this.username);
    console.log(this);
}

//chai()
// below mentioned function is basic Arrow function
//const addTwo = (num1, num2) => {
//    return num1 +num2
//}

//const addTwo = (num1, num2) =>  num1 + num2  
//const addTwo = (num1, num2) => (num1 + num2)
//const addTwo = (num1, num2) => { username: "Ankita" }
// in line 42, the code will not run as the curly braces alone can not used in arrow function 
//const addTwo = (num1, num2) => ({username: "Ankita"})
  
//console.log(addTwo(4, 5));

//const myArray = [2, 3, 4, 5]

//myArray.forEach()


