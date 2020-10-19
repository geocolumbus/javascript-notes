/*jshint esversion: 6 */
const {workerData, parentPort} = require('worker_threads');

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

let t = 1;
const start = new Date();
for (let j = 0; j < workerData.max; j++) {
    for (let i = 0; i < 2 ** 4; i++) {
        t = t * 1.0000000001;
    }
}
const end = new Date();
const delta = end - start;

parentPort.postMessage({i: workerData.i, max: workerData.max, t: t, delta: delta});
