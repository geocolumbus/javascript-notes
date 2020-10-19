/*jshint esversion: 6 */
// Requires ES6
"use strict"

const myMap = new Map()

myMap.set("one", 1)
myMap.set("two", 2)

// 1 2
console.log(myMap.get("one"), myMap.get("two"))

// val = 1  key = one  map = [object Map]
// val = 2  key = two  map = [object Map]
myMap.forEach((val, key, map) => {
    console.log(`val = ${val}  key = ${key}  map = ${map}`)
})

// 2
console.log(myMap.size)

let it = myMap.entries()

// it.next() = {"done":true}
// it.next() = {"value":["two",2],"done":false}
// it.next() = {"value":["one",1],"done":false}
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)

it = myMap.keys()

// it.next() = {"value":"one","done":false}
// it.next() = {"value":"two","done":false}
// it.next() = {"done":true}
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)

it = myMap.values()

// it.next() = {"value":1,"done":false}
// it.next() = {"value":2,"done":false}
// it.next() = {"done":true}
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)
console.log(`it.next() = ${JSON.stringify(it.next())}`)

console.log("------------------------------------------------")

let arr = [1, 2, 3, 4]

let plus5 = arr.map((val, i, arr) => {
    console.log(`val = ${val}  i = ${i}  arr = ${arr}`)
    return val + 5
})

// val = 1  i = 0  arr = 1,2,3,4
// val = 2  i = 1  arr = 1,2,3,4
// val = 3  i = 2  arr = 1,2,3,4
// val = 4  i = 3  arr = 1,2,3,4
// [ 6, 7, 8, 9 ]
console.log(plus5)
