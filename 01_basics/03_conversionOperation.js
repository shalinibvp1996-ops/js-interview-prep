let score = "33"
//or
//let score = null
//or
//let score = undefined


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// Notes:-
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Notes:-
// 1 => true; 0 => false
// "" => false
// "Shalini" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);