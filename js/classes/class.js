/*jshint esversion: 6 */
"use strict";

let _count = 0; // Static variables are implemented outside the class

class Person {

    constructor(name, location) {
        console.log(`constructor("${name}", "${location}")`);
        this._name = name;
        this._location = location;
        Person.incrementCount();
    }

    get name() {
        console.log("get name()");
        return this._name;
    }

    set name(name) {
        console.log(`set name("${name}")`);
        this._name = name;
    }

    get location() {
        console.log("get location()");
        return this._location;
    }

    set location(location) {
        console.log(`set location("${location}")`);
        this._location = location;
    }

    static getCount() {
        console.log("static getCount()");
        return _count;
    }

    static incrementCount() {
        console.log("static incrementCount()");
        _count++;
    }
}

const me = new Person("George", "Worthington");

console.log(`\n${me.name} at ${me.location}: count = ${Person.getCount()}\n`);

me.name = "Alex";
me.location = "TWHS";

console.log(`\n${me.name} at ${me.location}: count = ${Person.getCount()}\n`);

const other = new Person("Sam", "Hobbiton");

console.log(`\n${other.name} at ${other.location}: count = ${Person.getCount()}\n`);

// constructor("George", "Worthington")
// set name("George")
// set location("Worthington")
// static incrementCount()
// get name()
// get location()
// static getCount()
//
// George at Worthington: count = 1
//
// set name("Alex")
// set location("TWHS")
// get name()
// get location()
// static getCount()
//
// Alex at TWHS: count = 1
//
// constructor("Sam", "Hobbiton")
// set name("Sam")
// set location("Hobbiton")
// static incrementCount()
// get name()
// get location()
// static getCount()
//
// Sam at Hobbiton: count = 2
