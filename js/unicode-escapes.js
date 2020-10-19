/*jshint esversion: 9 */
// Requires ES9
"use strict";

// You can test for Unicode properties in REGEX using escapes

console.log(/^\p{ASCII}+$/u.test('abc'));   // true
console.log(/^\p{ASCII}+$/u.test('ABC@'));  // true
console.log(/^\p{ASCII}+$/u.test('ABC🙃')); // false

console.log(/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF')); // true
console.log(/^\p{ASCII_Hex_Digit}+$/u.test('h'));                // false

console.log(/^\p{Lowercase}$/u.test('h')); // true
console.log(/^\p{Uppercase}$/u.test('H')); // true

console.log(/^\p{Emoji}+$/u.test('H'));    // false
console.log(/^\p{Emoji}+$/u.test('🙃🙃'));  // true

console.log(/^\p{Script=Greek}+$/u.test('ελληνικά')); // true
console.log(/^\p{Script=Latin}+$/u.test('hey'));      // true
