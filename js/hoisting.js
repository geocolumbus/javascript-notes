/*jshint esversion: 6 */
// Requires ES5
"use strict";

// undefined
// number

console.log(typeof x);
if (1 === 1) {
    var x = 3;
}
console.log(typeof x);

console.log("---------------------");

// undefined
// number
// undefined

console.log(typeof y);
if (1 === 1) {
    let y = 3;
    console.log(typeof y);
}
console.log(typeof y);


