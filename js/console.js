/*jshint esversion: 6 */
// Requires ES8
"use strict"

// console.assert -------------------------------------------------------------

/*
Logs a message to console only if the assertion fails
 */
console.assert(1 === 1, "This is not printed")
console.assert(1 !== 1, "This is printed")

// console.clear --------------------------------------------------------------

/*
Clears the console and starts logging at the top of the screen
 */
//console.clear();

// console.count --------------------------------------------------------------

/*
one: 1
two: 1
one: 2
two: 2
one: 1
 */
console.count("one")
console.count("two")
console.count("one")
console.count("two")
console.countReset("one")
console.count("one")

// console.dir ----------------------------------------------------------------

// In a browser, gives an interactive object display in the console.
console.dir({"one": 1, "two": 2})


// console.group, groupEnd, groupCollapsed ------------------------------------

/*
ONE
  First line.
  Second line.
  TWO
    Sub line 1
    Sub line 2
  Continuing on
    This group has no label
    This group has no label
  A collapsed group follows
    one
    two
    three
    four
*/
console.group("ONE")
console.log("First line.")
console.log("Second line.")
console.group("TWO")
console.log("Sub line 1")
console.log("Sub line 2")
console.groupEnd("TWO")
console.log("Continuing on")
console.group()
console.log("This group has no label")
console.log("This group has no label")
console.groupEnd()
console.log("A collapsed group follows")
console.groupCollapsed()
console.log("one")
console.log("two")
console.log("three")
console.log("four")
console.groupEnd()
console.groupEnd()

// log levels -----------------------------------------------------------------

/*
debug
info
warn
error
 */
console.debug("debug")
console.info("info")
console.warn("warn")
console.error("error")

// console.log ----------------------------------------------------------------

// Converts objects to strings and displays them, with an interactive object
// under the string
console.log({"one": 1, "two": 2})


// console.table --------------------------------------------------------------

/*
┌─────────┬────────┬────────┬─────────┐
│ (index) │   0    │   1    │    2    │
├─────────┼────────┼────────┼─────────┤
│  row1   │ 'one'  │ 'two'  │ 'three' │
│  row2   │ 'four' │ 'five' │  'six'  │
└─────────┴────────┴────────┴─────────┘
*/
console.table({
    "row1": ["one", "two", "three"],
    "row2": ["four", "five", "six"]
})

/*
┌─────────┬───────────────────────────┐
│ (index) │          Values           │
├─────────┼───────────────────────────┤
│    0    │ [ 'one', 'two', 'three' ] │
│    1    │ [ 'four', 'five', 'six' ] │
└─────────┴───────────────────────────┘
 */
console.table([
    ["one", "two", "three"],
    ["four", "five", "six"]
])

// console.time, console.timeEnd ----------------------------------------------

// Calls a timer and displays elapsed time when it ends

// nested_loop: 13.028ms
console.time("nested_loop")
let a = 12345.6789
let b = 0
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        b += (i + j) / a
    }
}
console.timeEnd("nested_loop")

// console.trace --------------------------------------------------------------

/*
Trace
    at Object.<anonymous> (/Users/georgecampbell/intellij_workspace/javascript-notes/js/console.js:133:9)
    at Module._compile (internal/modules-javascript/cjs/loader.js:678:30)
    at Object.Module._extensions..js (internal/modules-javascript/cjs/loader.js:689:10)
    at Module.load (internal/modules-javascript/cjs/loader.js:589:32)
    at tryModuleLoad (internal/modules-javascript/cjs/loader.js:528:12)
    at Function.Module._load (internal/modules-javascript/cjs/loader.js:520:3)
    at Function.Module.runMain (internal/modules-javascript/cjs/loader.js:719:10)
    at startup (internal/bootstrap/node.js:228:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)
 */
console.trace()
