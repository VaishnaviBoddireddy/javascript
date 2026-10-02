const accountId = 12345
let accountEmail = "vaishnavi@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
//accountId = 2 //not allowed because accountId is a constant
console.log(accountId);
accountEmail="newemail@gmail.com"
console.log(accountEmail);

/* Prefer not to use var because of the issue in block scope and functional scope */
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])