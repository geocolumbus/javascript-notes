/*jshint esversion: 6 */
"use strict";

let decoration="+-+-+-+-+-+-+";

class t {
    constructor(name) {
        this.name=name;
    }

    say () {
        console.log(`this = ${JSON.stringify(this)}`);
        console.log(`x = ${this.name}`);
        console.log(`decoration = ${decoration}`);
        this.sayLocation("Worthington");
    }

    sayLocation(location) {
        console.log(`location = ${location}`);
    }
}

let n = new t("George");
n.say();

// this = {"name":"George"}
// x = George
// decoration = +-+-+-+-+-+-+
// location = Worthington

console.log("------------------------------------------------");

// {}
console.log(this);


