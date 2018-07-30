/*jshint esversion: 6 */
// Requires ES6
// Extended from arrays to objects in ES9
"use strict";

// Name is raju
// Rest is { profession: 'developer',
//     interests: 'devops',
//     address:
//     { street: '1 inifinity drive',
//         state: 'OH',
//         zip: [ 12345, 6789 ] } }
(function(){
    const resume = {
        profession: 'developer',
        interests: 'devops',
        name: 'raju',
        address: {
            street: '1 inifinity drive',
            state: 'OH',
            zip: [12345, 6789]
        }
    };
    const {
        name,
        ...rest
    } = resume;
    console.log('Name is', name);
    console.log('Rest is', rest);
}());