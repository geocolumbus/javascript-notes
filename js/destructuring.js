/*jshint esversion: 6 */
// Requires ES6
"use strict";

function one() {
    let point = {x: 1, y: 2};
    let {x: a, y: b} = point;
    console.log(a); // 1
    console.log(b); // 2
// alternatively
    let {x, y} = point;
    console.log(x); // 1
    console.log(y); // 2
}


function two() {
    let color = [255, 255, 100, 0.5];
    let [r, g, , a] = color;
    console.log(r); // 255
// nested works just as well

    let [[, c], y] = [['a', 'b'], 2];
    console.log(c); // 'b'
}


function three() {
// easy swap
    let x = 10, y = 20;
    [y, x] = [x, y];
    console.log(x); // 20
    console.log(y); // 10
}

// 1
// 2
// 1
// 2
// --------------------------------------------------------
// 255
// b
// --------------------------------------------------------
// 20
// 10

one();
console.log("--------------------------------------------------------");
two();
console.log("--------------------------------------------------------");
three();