// singleton -- not used in literlas
//Object.create


// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Ankita",
    "Full name": "Ankita Sharma",
    [mySym]: "mykey1",
    age: 20,
    location: "Rajasthan",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["Full name"]);
//console.log(jsUser[mySym]);

jsUser.email = "anki@chat.com"
//Object.freeze(jsUser)
jsUser.email = "anki@micro.com"
//console.log(jsUser.email);

jsUser.greeting = function () {
    console.log("Hello JS user");
    
}
jsUser.greeting2 = function () {
    console.log(`Hello JS user, ${this.name}`);
}
    console.log(jsUser.greeting());
    console.log(jsUser.greeting2());
    