/*jshint esversion: 6 */
// Requires ES8
"use strict";

(function () {
    // LOOPING
    const square = (num = 0) => {
        console.log(`squaring ${num}`);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(num * num);
            }, 250);
        });
    };

    let nums = [1, 2, 3, 4, 5, 6];

    async function processArray(nums) {
        let sum = 0;
        for (const num of nums) {
            sum += await square(num);
        }
        return sum;
    }

    processArray(nums).then(sum => {
        console.log(`Sum of squares = ${sum}`);
    });

}());

