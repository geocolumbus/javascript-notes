/*jshint esversion: 6 */
// Requires ES6
// Extended from arrays to objects in ES9
// ES2018 spec
"use strict";

// Object rest/spread
(function () {
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

    // Name is raju
    // Rest is { profession: 'developer',
    //     interests: 'devops',
    //     address:
    //     { street: '1 inifinity drive',
    //         state: 'OH',
    //         zip: [ 12345, 6789 ] } }


// Object rest/spread =
    const input = {x: 1, y: 2, a: 3, b: 4};
    const {x, y, ...z} = input;

    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // {a:3, b:4}b

}());