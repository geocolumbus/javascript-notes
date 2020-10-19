/*jshint esversion: 9 */
// Requires ES9
// see - https://javascript.info/async-iterators-generators
"use strict";

let range = {
    from: 1,
    to: 5,

    // this line is same as [Symbol.asyncIterator]: async function*() {
    async * [Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            // make a pause between values, wait for something
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield value;
        }
    }
};

(async () => {
    for await (let value of range) {
        console.log(value); // 1, then 2, then 3, then 4, then 5
    }

})();
