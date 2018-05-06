/*jshint esversion: 6 */
"use strict";

// ES9 functionality

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
    };

// use spread operator to conjoin one on to another
    const resume = {
        profession: 'developer',
        interests: 'devops',
        ...raju,
    };
    console.log('Conjoined object', resume);
}());