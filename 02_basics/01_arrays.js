// array

const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(7);

// myArr.unshift(9);

// console.log(myArr.includes(9));
// console.log(myArr.index(9));

// const newArr = myArr.join()  //join gives the value in string 
// console.log(myArr);
// console.log(newArr);


// slice and splice  -> 


// slice = copy  || slice() extracts a portion of an array and returns a new array.   
// ✅ Does NOT modify the original array.
// Syntax
// array.slice(start, end)
//start → inclusive
// end → exclusive



// splice = modify || splice() adds, removes, or replaces elements in an array.

// array.splice(start, deleteCount, item1, item2...)
// const fruits = ["apple", "banana", "orange", "mango"];
// const removed = fruits.splice(1, 2);
// console.log(removed);


console.log("A" , myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);
console.log("C" , myArr);
console.log(myn2);
