/*jshint esversion: 6 */
"use strict";

let s="";
for (let i=0x100; i<0x10F; i++) {
    s += String.fromCharCode(i);
}
console.log('\n${s}');