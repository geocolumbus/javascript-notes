/*jshint esversion: 6 */
// Requires ES6
"use strict"

const mySet = new Set()

mySet.add("George")
mySet.add("Alex")

// George
// Alex
mySet.forEach(function (name) {
    console.log(name)
})
