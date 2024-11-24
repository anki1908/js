const accountId = 123456
let accountEmail = "ankita@yahoo.com"
var accountPassword = "12345"
accountCity = "Alwar"
let accountState

// accountId = 98765 // not allowed

accountEmail = "viovio.vio"
accountPassword = "321654"
accountCity = "Ahemdabad"


console.log(accountId); 

/*
prefer not to use var because of issue in block scope & functinal block
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);
