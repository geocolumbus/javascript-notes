/*jshint esversion: 6 */

(function () {
    "use strict";

    console.log("TRUTHINESS in Javascript\n------------------------");

    1 ? console.log("true:   1") : console.log("false:  1");
    0 ? console.log("true:   0") : console.log("false:  0");
    -1 ? console.log("true:  -1") : console.log("false: -1");

    console.log("");

    "" ? console.log('true:  ""') : console.log('false: ""');
    "g" ? console.log('true:  "g"') : console.log('false: "g"');

    console.log("");

    let myNull = null;

    myNull ? console.log("true:  null") : console.log("false: null");

    console.log("");

    let nothing;

    nothing ? console.log("true:  undefined") : console.log("false: undefined");

    console.log("");

    typeof undefinedVariable === "undefined" ? console.log("true:  typeof undefinedVariable === \"undefined\"") : console.log("false: typeof undefinedVariable === \"undefined\"");
    let definedVariable;
    console.log("\nlet definedVariable;");
    typeof definedVariable === "undefined" ? console.log("true:  typeof definedVariable === \"undefined\"") : console.log("false: typeof definedVariable === \"undefined\"");
    console.log("\nlet definedVariable = \"\";");
    definedVariable="";
    typeof definedVariable === "undefined" ? console.log("true:  typeof definedVariable === \"undefined\"") : console.log("false: typeof definedVariable === \"undefined\"");


    console.log("");

    let emptyObject = {};
    let fullObject = {name: null};

    console.log("let emptyObject = {}");
    Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object ? console.log("true:  Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object") : console.log("false: Object.keys(emptyObject).length === 0 && emptyObject.constructor === Object");

    console.log("\nlet fullObject = {name: null}");
    Object.keys(fullObject).length === 0 && fullObject.constructor === Object ? console.log("true:  Object.keys(fullObject).length === 0 && fullObject.constructor === Object") : console.log("false: Object.keys(fullObject).length === 0 && fullObject.constructor === Object");
    fullObject.hasOwnProperty("name") ? console.log("true:  fullObject.hasOwnProperty(\"name\")") : console.log("false: fullObject.hasOwnProperty(\"name\")");
    fullObject.name ? console.log("true:  fullObject.name") : console.log("false: fullObject.name  <--- because name === null");
    fullObject.hasOwnProperty("undefinedProperty") ? console.log("true:  fullObject.hasOwnProperty(\"undefinedProperty\")") : console.log("false: fullObject.hasOwnProperty(\"undefinedProperty\")");

    console.log("");

    let emptyArr = [];
    let fullArr = [1];
    emptyArr.length ? console.log("true:  [].length") : console.log("false: [].length");
    fullArr.length ? console.log("true:  [1].length") : console.log("false: [1].length");

    console.log("");

    let fun = function () {
    };

    function fun2() {
    };

    fun ? console.log("true:  fun, where let fun = function(){}") : console.log("false: fun, where let fun = function(){} ");
    fun2 ? console.log("true:  fun2, where function fun2(){}") : console.log("false: fun2, where function fun2(){}");
}());


