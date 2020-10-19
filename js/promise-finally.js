/*jshint esversion: 9 */
// Requires ES9

// allow you to run some code regardless of the successful or not successful execution of the promise
(function () {
    "use strict";

    const p = new Promise((res, rej) => {
        res("ok");
    })
        .then(() => {
            console.log("then");
        })
        .catch(() => {
            console.log("catch");
        })
        .finally(() => {
                console.log("finally");
            }
        );
}());
