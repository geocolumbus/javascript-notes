/*jshint esversion: 6 */
// Requires ES9
"use strict";

// 45701 1234
(function(){
    // named groups
    const RE_ZIP = /(?<major>[0-9]{5})-(?<minor>[0-9]{4})/;
    const matchObj = RE_ZIP.exec('45701-1234');
    const {groups: {major, minor}} = matchObj;
    console.log(major, minor);
}());


// positive look ahead
const RE_POS_LA = /(?=\d{10})(\d{3})/;
const areaCode = RE_POS_LA.exec('6141234567');
console.log(areaCode[1]); // 614


// positive look behind
const RE_URL = /(?<=http:\/\/)[\w/\.]+(?=\?)/;
const urlMatch = RE_URL.exec('http://www.google.com/search?hl=en');
console.log(urlMatch[0]); // www.google.com/search


// negative look ahead
const RE_DIR = /home\/(?!photos)(.*)/;
const dirMatches = RE_DIR.exec('home/documents/vacation.jpg');
console.log(dirMatches[1]); // documents/vacation.jpg
const dirDoesNotMatch = RE_DIR.exec('home/photos/vacation.jpg');
console.log(dirDoesNotMatch); // null


// negative look behind
const RE_LOGIN = /(?<!http:\/\/)[\w:]+(?=@)/
const loginMatch = RE_LOGIN.exec('ftp://username:password@hostname/');
console.log(loginMatch[0]); // username:password
