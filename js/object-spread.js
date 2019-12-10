/*jshint esversion: 6 */
// Requires ES6
// Extended from arrays to objects in ES9
"use strict";

//Conjoined object { profession: 'developer',
//    interests: 'devops',
//    name: 'raju',
//    address:
//    { street: '1 inifinity drive',
//        state: 'OH',
//        zip: [ 12345, 6789 ] } }
(function () {
    // we have an object
    const raju = {
        name: 'raju',
        address: {
            street: '1 inifinity drive',
            state: 'OH',
            zip: [
                12345,
                6789
            ]
        }
    }

// use spread operator to conjoin one on to another
    const resume = {
        profession: 'developer',
        interests: 'devops',
        ...raju,
    }
    console.log('Conjoined object', resume)
}())