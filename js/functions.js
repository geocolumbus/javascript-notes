/*jshint esversion: 8 */
// Requires ES8
"use strict";

// Trailing commas are allowed
function test(one, two,) {
    console.log(one, two);
}

test("George", "Zach",); // George Zach
