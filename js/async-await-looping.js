/*jshint esversion: 6 */
// Requires ES8
"use strict";

(function () {
    // LOOPING
    const square = (num = 0) => {
        console.log(`squaring ${num}`)
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(num * num)
            }, Math.floor(Math.random() * 375) + 100)
        })
    }

    let nums = [1, 2, 3, 4, 5, 6]

    async function processArray(nums) {
        let sum = 0
        for (const num of nums) {
            sum += await square(num)
        }
        return sum // sum is bunch of chained promising waiting to complete. It will fire .then() when all of them are done.
    }

    processArray(nums).then(sum => {
        console.log(`Sum of squares = ${sum}`)
    })

}())

