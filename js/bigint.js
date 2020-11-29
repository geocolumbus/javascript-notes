// Requires ES2020 11 but jshint only supports up to 10 with bigint as experimental
// "use strict"  - use strict causes a BigInt jshint error

let b = 982347798234729834729834729384n
let b2 = b ** 2n

// 965007196696621476598612237940892119148141216727016513019456n
console.log(b2)

let c = BigInt("9234802938420934820938409")
let n = 38348
let d = c / BigInt(n)

// 240815764535854146785n
console.log(d)

let e = 83648484n
let f = Number(e)

// 258733.3250850603
console.log(f / 323.3)
