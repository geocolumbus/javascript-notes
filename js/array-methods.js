// ~~~ INITIALIZE ARRAYS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// a = [0,1,2,3,4,5,6,7,8,9]
const a = [...Array(10).keys()]

let start = 10
const length = 10
// b = [10,11,12,13,14,15,16,17,18,19]
const b = [...Array(length).keys()]
    .map(item => item + start)

start = 10
let end = 14
// c = [10,11,12,13,14]
const c = [...Array(end - start + 1).keys()]
    .map(item => item + start)

start = -8
end = -4
// d = [-8,-7,-6,-5,-4]
const d = [...Array(end - start + 1).keys()]
    .map(item => item + start)

// e = [null,null,null,null,null,null]
const e = Array(6)

// f = [255,255,255,255,255,255]
const f = Array(6).fill(0xFF)

// Array equality - numbers or strings only, not arrays or objects
function areArraysEqual(a, b) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
}

const g = [1, 2]
const h = [1, 2]
let z

z = g === h // false
z = g == h // false
console.log(areArraysEqual(g, h)) // true

h.push(3) // h = [1, 2, 3]
console.log(areArraysEqual(g, h)) // false

g.push(4) // g = [1, 2, 4]
console.log(areArraysEqual(g, h)) // false

g.pop()   // g = [1, 2]
g.push(3) // g = [1, 2, 3]
console.log(areArraysEqual(g, h)) // true
