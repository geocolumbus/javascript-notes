/*jshint esversion: 8 */
// Requires ES8
"use strict";

// Entries are available on objects now, similar
// to arrays.

// An array of (key,value) pairs
// [ [ 'name', 'Fred' ], [ 'age', 87 ] ]
const person = {name: 'Fred', age: 87};
console.log(Object.entries(person));

// An array of (key,value) pairs
// [ [ '0', 'Fred' ], [ '1', 'Tony' ] ]
const people = ['Fred', 'Tony'];
console.log(Object.entries(people));

console.log();

// You can assign objects to other objects

const person1 = {
    set name(newName) {
        console.log(newName);
    }
};

// This won’t work:
const person2 = {};
Object.assign(person2, person1);
console.log(person2);    // { name: undefined }
person2.name = "George"; // no console.log

console.log();

// But this will work:
const person3 = {};
Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1));
console.log(person3);    // { name: [Setter] }
person3.name = "George"; // George

