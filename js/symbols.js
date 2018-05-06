/*jshint esversion: 6 */
"use strict";

// 1. Symbols are always unique.
// 2. You can have Symbols as method names.

// Demonstrates construction and immutability
// Symbol(foo)
// false
// symbol
(function () {
    console.log('Demonstrates construction and immutability');
    // the string 'foo' is descriptional
    const fooSym = Symbol('foo');
    console.log(fooSym.toString());
    // is universal, and immutable
    console.log(Symbol('foo') === Symbol('foo'));
    // is a datatype
    console.log(typeof fooSym);
})();

console.log("---------------------------");

// TypeError: Symbol is not a constructor
// at new Symbol (<anonymous>)
// at /Users/georgecampbell/intellij_workspace/javascript-notes/js/symbols.js:24:9
// at Object.<anonymous> (/Users/georgecampbell/intellij_workspace/javascript-notes/js/symbols.js:35:3)
// at Module._compile (module.js:573:30)
// at Object.Module._extensions..js (module.js:584:10)
// at Module.load (module.js:507:32)
// at tryModuleLoad (module.js:470:12)
// at Function.Module._load (module.js:462:3)
// at Function.Module.runMain (module.js:609:10)
// at startup (bootstrap_node.js:158:16)

(function () {
// no constructor!!!
    try {
        new Symbol()
    } catch (e) {
        // TypeError: Symbol is not a constructor
        console.log(e);
    }
// global registry
// Symbol.for will look up a symbol with a key,
// and create one if it does not exist
    const fooSym = Symbol.for('foo');
    console.log(fooSym === Symbol.for('foo'));
    console.log(Symbol.keyFor(fooSym));
})();

console.log("---------------------------");

// ["(123)","(45)"]
(function () {
    class HyphenSplitter {
        [Symbol.split](txt, n) {
            const result = txt.split('-')
                .map(s => `(${s})`);
            if (result.length > n) {
                return result.splice(0, n);
            }
            return result;
        }
    }
    const ssn = '123-45-6789';
    console.log(JSON.stringify(
        ssn.split(new HyphenSplitter(), 2)));
})();
