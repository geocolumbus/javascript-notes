/*jshint esversion: 6 */
// Requires ES6

"use strict";

let f = function (x, y) {
    return [x, y];
};

// [6,7]
console.log(f(6, 7));

let f1 = (x, y) => [x, y];

// [3,4]
console.log(f1(3, 4));

let f2 = function () {
    return 3;
};

// 3
console.log(f2());

let f3 = () => 3;

// 3
console.log(f2());

console.log("-----------------------------------------------------")

    // 10
    (function () {
        // single args don't need parentheses
        let fatOne = val => {
            return val;
        };
        console.log(fatOne(10)); // 10
    })();

console.log("-----------------------------------------------------")

    // [ 'js', 'next' ]
    (function () {
        // multiple args have to have parentheses
        let fatTwo = (a, b) => {
            return [a, b];
        };
        console.log(fatTwo('js', 'next'));
    }());

console.log("-----------------------------------------------------")

    // I have no args
    (function () {
        // no args have to have parentheses
        // without curly brackets 'return' is implicit
        let fatFive = () => 'I have no args';
        console.log(fatFive()); // I have no args
    }());

console.log("-----------------------------------------------------")

    // Hello! My name is raju
    (function () {
        function Person(name) {
            this.name = name;
            this.sayHello = () => "Hello! My name is " + this.name;
        }

        let me = new Person("raju");
        // CANNOT Change 'this'
        let obj = {};
        console.log(me.sayHello.call(obj)); // "Hello! My name is raju"
    }());
