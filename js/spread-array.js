/*jshint esversion: 6 */
// Requires ES6
"use strict";

let arr = [1, 2, 3, 4];

// [ 1, 2, 3, 4 ]
console.log(arr);

// 1 2 3 4
console.log(...arr);

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = [...a, ...b];

// [ 1, 2, 3, 4, 5, 6 ]
console.log(c);

console.log("-------------------------------------------");

function moveFirstToLast(a, ...b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    return [...b, a];
}

// a = 1
// b = 2,3,4,5,6
// [ 2, 3, 4, 5, 6, 1 ]
console.log(moveFirstToLast(1, 2, 3, 4, 5, 6));
