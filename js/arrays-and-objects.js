/*jshint esversion: 6 */
// Requires ES5

"use strict";

let a = ["one", "two", "three"];

// always check for hasOwnProperty when iterating across an array to prevent
for (let index in a) {
    if (a.hasOwnProperty(index)) {
        console.log(index);
    }
}
console.log();

// 0
// 1
// 2

// iterate over the value
for (let val of a) {
    console.log(val);
}
console.log();

// one
// two
// three

let b = {"name": "george", "city": "worthington", "data": [1, 2]};

// when iterating over properties, always check if hasOwnProperty exists to avoid prototype functions being included
for (let prop in b) {
    if (b.hasOwnProperty(prop)) {
        console.log(prop + " - " + b[prop]);
    }
}
console.log();

// name - george
// city - worthington
// data - 1,2

console.log(JSON.stringify(a, null, 4));
console.log();
console.log(JSON.stringify(b, null, 4));

