"use strict"

let a = ["one", "two", "three"]
let b = {"name": "george", "city": "worthington", "data": [1, 2]}

// for ... in (arrays)
// 0
// 1
// 2
for (let index in a) {
    if (a.hasOwnProperty(index)) {
        console.log(index)
    }
}

// for ... of (arrays)
// one
// two
// three
for (let val of a) {
    console.log(val)
}

// for ... in (objects)
// name - george
// city - worthington
// data - 1,2
for (let prop in b) {
    if (b.hasOwnProperty(prop)) {
        console.log(prop + " - " + b[prop])
    }
}

