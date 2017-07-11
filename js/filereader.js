/*jshint esversion: 6 */

// READ A TEXT FILE ********************************************************

let textFile = require("fs");

textFile.readFile("../res/data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log("\n" + data);
});

// READ A JSON FILE ********************************************************

let jsonFile = require("fs");

jsonFile.readFile("../res/data.json", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    try {
        let json = JSON.parse(data);
        console.log("\n" + JSON.stringify(json, null, 4));
    } catch (error) {
        console.log(error);
    }
});

// READ A YAML FILE ********************************************************
//
// npm install yamljs
// add to .bash_profile export PATH=$PATH:node_modules/.bin


let yamlFile = require("fs");
let YAML = require("yamljs");


yamlFile.readFile("../res/data.yaml", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    try {
        let nativeObject = YAML.parse(data);
        console.log(JSON.stringify(nativeObject, null, 4));
    } catch (error) {
        console.log(error);
    }
});