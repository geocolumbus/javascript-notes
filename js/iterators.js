/*jshint esversion: 6 */
// Requires ES6
"use strict";

(function () {
    // creates an iterator over arrays
    // returns an array of [key, value] by default
    let arr = [10, 20, 30]
    let iter = Iterator(arr)
    console.log(iter.next()) // [0,10]
    console.log(iter.next()) // [1,20]
    console.log(iter.next()) // [2,30]
}())

console.log("-------------------------------------------------------------");

(function () {
    // the for .. of loop automatically invokes 'next'
    let arr = [10, 20, 30]
    for (let i of arr) {
        console.log(i)
    }
}())

console.log("-------------------------------------------------------------");

(function () {
    // Maps
    for (let [k, v] of new Map([["a", 1], ["b", 2]])) {
        console.log(k, "->", v)
    }
    // Sets
    for (let k of new Set(["a", "b", "a"])) {
        console.log(k)
    }
    // Strings
    for (let c of "ES6 Rocks!!") {
        console.log(c)
    }
}())

console.log("-------------------------------------------------------------");

(function () {
    // you can define custom iterators for your own
// objects by tacking a iterator property on it
// The iterator should be a function that
// returns an object that responds to the 'next' call
    let iterableObj = {
        upperLimit: 10,
        [Symbol.iterator]: function () {
            // iterator is a function
            var that = this
            // that returns an object
            return {
                cur: 0,
                // that has the next function defined
                next: function () {
                    if (this.cur < that.upperLimit) {
                        let ret = this.cur
                        this.cur++
                        return {value: ret, done: false}
                    }
                    this.cur = 0
                    return {done: true}
                }
            }
        }
    }
    for (let i of iterableObj) console.log(i) // 0,1,2,…,9
}())
