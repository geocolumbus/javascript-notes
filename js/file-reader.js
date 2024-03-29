// READ A TEXT FILE ********************************************************

const textFile = require('fs');

let text;

textFile.readFile('../res/data.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    text = data;
    console.log(`\n${text}`);
});

// READ A JSON FILE ********************************************************

const jsonFile = require('fs');

let json;

jsonFile.readFile('../res/data.json', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    try {
        json = JSON.parse(data);
        console.log(`\n${JSON.stringify(json, null, 4)}`);
    } catch (error) {
        console.log(error);
    }
});

// READ A YAML FILE ********************************************************
//
// npm install yamljs
// add to .bash_profile export PATH=$PATH:node_modules/.bin

const yamlFile = require('fs');
const YAML = require('yamljs');

let yaml;

yamlFile.readFile('../res/data.yaml', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    try {
        yaml = YAML.parse(data);
        console.log(JSON.stringify(yaml, null, 4));
    } catch (error) {
        console.log(error);
    }
});
