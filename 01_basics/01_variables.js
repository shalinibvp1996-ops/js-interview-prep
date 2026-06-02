const accountID = 144553
let accountEmail = "shalini@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountID = 2
accountEmail="shaliniraj@gmail.com"
accountPassword = "67890"
accountCity = "Bengaluru"

/*
Prefer not to use var because of issue in block space and functional scope
*/ 

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);