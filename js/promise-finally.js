/*jshint esversion: 6 */
// Requires ES2018

(function () {
    "use strict"

    const p = new Promise((res, rej) => {
        res("ok")
    })
        .then(() => {
            console.log("then")
        })
        .catch(() => {
            console.log("catch")
        })
        .finally(() => {
                console.log("finally")
            }
        )
}())