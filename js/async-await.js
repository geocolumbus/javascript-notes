/*jshint esversion: 6 */
"use strict";

// ES8 functionality

(function () {
    const a = () => {
        return new Promise((res, rej) => setTimeout(res, 1000, 'a'));
    };
    const b = (arg = "default") => {
        console.log('in b', arg);
        return new Promise((res, rej) => setTimeout(res, 1000, 'b'));
    };
    const c = (arg = "default") => {
        console.log('in c', arg);
        return Promise.resolve('c');
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