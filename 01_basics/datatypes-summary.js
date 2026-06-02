// Primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, BigInt 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)


//Reference (Non primitive)
//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "dogs"];

let myObj = {
    name: "shalini",
    age:28,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof null); //object
console.log(typeof scoreValue);

// type of Undefined => undefined
// type of null => object
// type of Boolean => boolean
// type of number => number
// type of String => string
// type of Symbol => symbol
// type of Function => object function

// Link for documentaion
// https://262.ecma-international.org/5.1/#sec-11.4.3
