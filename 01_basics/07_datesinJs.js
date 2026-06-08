// Dates

let myDate = new Date()
// console.log(myDate);

/*console.log(myDate.toString()); // -> Mon Jun 08 2026 16:35:59 GMT+0900 (Japan Standard Time)
console.log(myDate.toDateString()); // -> Mon Jun 08 2026
console.log(myDate.toISOString()); // -> 2026-06-08T07:35:59.348Z
console.log(myDate.toJSON()); // -> 2026-06-08T07:35:59.348Z
console.log(myDate.toLocaleDateString()); // -> 6/8/2026
console.log(myDate.toLocaleString()); // -> 6/8/2026, 4:35:59 PM
console.log(myDate.toLocaleTimeString()); // -> 4:35:59 PM
console.log(myDate.toUTCString()); // -> Mon, 08 Jun 2026 07:35:59 GMT

console.log(typeof myDate); //Object*/

// let myCreatedDate = new Date(2026,5,8);
 let myCreatedDate = new Date("01-14-2026")
// let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// ${newDate.getDay()} and time
newDate.toLocaleString('default',{
    weekday:"long"
})