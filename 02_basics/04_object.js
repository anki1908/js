//const Wikki = new Object()

const Wikki = {}
Wikki.id = "123abc"
Wikki.name = "Ankita"
Wikki.isLoggedIn = true

//console.log(Wikki)

const user = {
    email : "adfg@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankita",
            lastname: "Sharma"
        }
    }
}

//console.log(user);
//console.log(user.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "all@gmail.com",
    },
    {
        id: 1,
        email: "all@gmail.com",
    },
    {
        id: 1,
        email: "all@gmail.com",
    }
]

users[1].email
console.log(Wikki);
console.log(Object.keys(Wikki));
console.log(Object.values(Wikki));
console.log(Object.entries(Wikki));
console.log(Wikki.hasOwnProperty('isLoggedIn'));
console.log(Wikki.hasOwnProperty('isLogged'));

