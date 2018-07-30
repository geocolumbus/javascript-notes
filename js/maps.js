/*jshint esversion: 6 */
// Requires ES6
"use strict";

const myMap = new Map();

myMap.set("one", 1);
myMap.set("two", 2);

// 1 2
console.log(myMap.get("one"), myMap.get("two"));
console.log("------------------------------------------------");

let arr = [1,2,3,4];

let plus5 = arr.map((val, i, arr) => {
    console.log(`val = ${val}  i = ${i}  arr = ${arr}`);
    return val + 5;
});

// val = 1  i = 0  arr = 1,2,3,4
// val = 2  i = 1  arr = 1,2,3,4
// val = 3  i = 2  arr = 1,2,3,4
// val = 4  i = 3  arr = 1,2,3,4
// [ 6, 7, 8, 9 ]
console.log(plus5);
