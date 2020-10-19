/*jshint esversion: 8 */
// Requires ES8
"use strict";

(function () {
    const a = () => {
        console.log(`executing a()`);
        return new Promise((res, rej) => setTimeout(res, 1000, 'a'));
    };
    const b = (arg = "default") => {
        console.log(`executing b(${arg})`);
        return new Promise((res, rej) => setTimeout(res, 1000, 'b'));
    };
    const c = (arg = "default") => {
        console.log(`executing c(${arg})`);
        return Promise.resolve('c complete');
    };

    // UTILIZING PROMISES
    a().then(b).then(c).then(console.log);

    // UTILIZING ASYNC/AWAIT
    (async () => {
        const a1 = await a();
        const b1 = await b(a1);
        const c1 = await c(b1);
        console.log(c1);
    })();
}());

