"use strict";

// 1. Symbols are always unique.
// 2. You can have Symbols as method names.

// Demonstrates construction and immutability
// Symbol(foo)
// false
// symbol
(function () {
    console.log("Demonstrates construction and immutability")
    // the string 'foo' is descriptional
    const fooSym = Symbol("foo")
    console.log(fooSym.toString())
    // is universal, and immutable
    console.log(Symbol("foo") === Symbol("foo"))
    // is a datatype
    console.log(typeof fooSym)
})()

console.log("---------------------------");

// TypeError: Symbol is not a constructor

(function () {
// no constructor!!!
    try {
        new Symbol()
    } catch (e) {
        // TypeError: Symbol is not a constructor
        console.log(e)
    }
// global registry
// Symbol.for will look up a symbol with a key,
// and create one if it does not exist
    const fooSym = Symbol.for("foo")
    console.log(fooSym === Symbol.for("foo"))
    console.log(Symbol.keyFor(fooSym))
})()

console.log("---------------------------");

// ["(123)","(45)"]
(function () {
    class HyphenSplitter {
        [Symbol.split](txt, n) {
            const result = txt.split("-")
                .map(s => `(${s})`)
            if (result.length > n) {
                return result.splice(0, n)
            }
            return result
        }
    }

    const ssn = "123-45-6789"
    console.log(JSON.stringify(
        ssn.split(new HyphenSplitter(), 2)))
})()
