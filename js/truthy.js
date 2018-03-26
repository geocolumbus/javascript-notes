/*jshint esversion: 6 */

"use strict";

/*
 * Demonstrates the following:
 *
 *   1        ->  true
 *
 *   0        ->  false
 *
 *  -1        ->  false
 *
 *  ""        ->  false
 *
 *  "g"       ->  true
 *
 *  null      ->  false
 *
 *  undefined ->  false
 *
 *  typeof undefinedVariable === "undefined" -> true
 *
 *  typeof definedVariable === "undefined"   -> true
 *
 *  typeof definedVariable === "undefined"   -> false
 *
 *  Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object  -> true
 *
 *  Object.keys(fullObject).length === 0 && fullObject.constructor === Object    -> false
 *
 *  fullObject.hasOwnProperty("name")              -> true
 *
 *  fullObject.hasOwnProperty("undefinedProperty") -> false
 *
 *  fullObject.name -> false (because name is null - truthiness of name)
 *
 *  [].length  -> false
 *
 *  [1].length -> true
 *
 *  functions that exist are true
 */


console.log("TRUTHINESS in Javascript\n------------------------");

1 ? console.log("true:   1") : console.log("false:  1"); // true
0 ? console.log("true:   0") : console.log("false:  0"); // false
-1 ? console.log("true:  -1") : console.log("false: -1"); // true

console.log("");

"" ? console.log('true:  ""') : console.log('false: ""'); // false
"g" ? console.log('true:  "g"') : console.log('false: "g"'); // true

console.log("");

let myNull = null;

myNull ? console.log("true:  null") : console.log("false: null"); // false

console.log("");

let nothing;

nothing ? console.log("true:  undefined") : console.log("false: undefined"); // false

console.log("");

typeof undefinedVariable === "undefined" ? console.log("true:  typeof undefinedVariable === \"undefined\"") : console.log("false: typeof undefinedVariable === \"undefined\""); // true

let definedVariable;
console.log("\nlet definedVariable;");
typeof definedVariable === "undefined" ? console.log("true:  typeof definedVariable === \"undefined\"") : console.log("false: typeof definedVariable === \"undefined\""); // true

console.log("\nlet definedVariable = \"\";");
definedVariable = "";
typeof definedVariable === "undefined" ? console.log("true:  typeof definedVariable === \"undefined\"") : console.log("false: typeof definedVariable === \"undefined\""); // false


console.log("");

let emptyObject = {};
let fullObject = {name: null};

console.log("let emptyObject = {}");
Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object ? console.log("true:  Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object") : console.log("false: Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object");

console.log("\nlet fullObject = {name: null}");
Object.keys(fullObject).length === 0 && fullObject.constructor === Object ? console.log("true:  Object.keys(fullObject).length === 0 && fullObject.constructor === Object") : console.log("false: Object.keys(fullObject).length === 0 && fullObject.constructor === Object"); // true
fullObject.hasOwnProperty("name") ? console.log("true:  fullObject.hasOwnProperty(\"name\")") : console.log("false: fullObject.hasOwnProperty(\"name\")"); // true
fullObject.name ? console.log("true:  fullObject.name") : console.log("false: fullObject.name  <--- because name === null"); // false
fullObject.hasOwnProperty("undefinedProperty") ? console.log("true:  fullObject.hasOwnProperty(\"undefinedProperty\")") : console.log("false: fullObject.hasOwnProperty(\"undefinedProperty\")"); // false

console.log("");

let emptyArr = [];
let fullArr = [1];
emptyArr.length ? console.log("true:  [].length") : console.log("false: [].length"); // false
fullArr.length ? console.log("true:  [1].length") : console.log("false: [1].length"); // true

console.log("");

let fun = function () {
};

function fun2() {
}

fun ? console.log("true:  fun, where let fun = function(){}") : console.log("false: fun, where let fun = function(){} "); // true
fun2 ? console.log("true:  fun2, where function fun2(){}") : console.log("false: fun2, where function fun2(){}"); // true



