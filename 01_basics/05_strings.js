const name = "shalini"
const repoCount = 50;

// console.log(name + repoCount + "value") Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Different way to declare string

const gameName = new String('Shalini-CN');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

// Notes (Must) 
// Learn and must see string methods for interviews

// substring() -> Extracts characters from a string between two indexes.
//string.substring(start, end)
const newString = gameName.substring(0,4);
console.log(newString);

// slice() -> Extracts a portion of a string and returns it as a new string.
// string.slice(start, end)
const anotherString = gameName.slice(-8,4); // Negative Index Support
console.log(anotherString);

/*| Feature                     | slice() | substring() |
| --------------------------- | ------- | ----------- |
| Negative indexes            | ✅ Yes   | ❌ No        |
| Swaps indexes automatically | ❌ No    | ✅ Yes       |
| Most commonly used          | ✅ Yes   | Less        |
*/

/* trim() -> Removes whitespace from beginning and end.
Related Methods
trimStart()
trimEnd()
*/

const newStringOne = "  Shalini  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() function removes extra spaces from the string

// replace() -> Replaces first occurrence of a string.

const url = "https://shalini.com/shalini%20singh";
 console.log(url.replace('%20','-'));

let fruitsName = "apple apple apple";
console.log(fruitsName.replace("apple", "orange"));

// Replace All
let fruits = "apple apple apple";
console.log(fruits.replaceAll("apple", "orange"));



 //includes() -> Checks if string contains text.
 console.log(url.includes('shalini')); // It gives true value because shalini is available in url.
 console.log(url.includes('hitesh')); // It gives false value because hitesh is not available in url.



 // split() -> Converts a string into an array.
 const str = "My - name - is - shalini"
 console.log(str.split('-'));

 let newStr = "Hello";

console.log(newStr.split(""));


 // blink() -> A very old HTML tag that made text blink on the screen.

 // bold() -> is an old String method that wraps text inside HTML <b> tags.
const text = "Hello";
console.log(text.bold());

// concat() -> is used to combine arrays or strings.
// String concat
const first = "Hello"
const second = "World"

console.log(first.concat(second));


// Array concat
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const result = arr1.concat(arr2);
console.log(result);


 // constructor() -> Every object in JavaScript has a constructor that tells which function created that object.

// join() => converts an array into a string.
const arr = ["H", "e", "l", "l", "o"];
console.log(arr.join("-"));
// Output -> H-e-l-l-o



 // Reverse a String

 let helloStr = "hello"
 let reversed = helloStr.split("").reverse().join("");
 console.log(reversed);


 /*
Interview Question
An interviewer may ask:
What is the difference between concat() and join()?
| Method     | Works On     | Returns                |
| ---------- | ------------ | ---------------------- |
| `concat()` | Array/String | Merged Array or String |
| `join()`   | Array        | String                 |
| `split()`  | String       | Array                  |
 */ 

// Count Words

let sentence = "I love JavaScript";
console.log(sentence.split(" ").length)

// Capitalize First Letter

let lang = "javascript";
let langResult = lang.charAt(0).toUpperCase() + lang.slice(1);
console.log(langResult);


/*
Top 10 string methods to know for interviews
slice()
substring()
split()
replace()
replaceAll()
trim()
includes()
indexOf()
startsWith() / endsWith()
toUpperCase() / toLowerCase()
*/