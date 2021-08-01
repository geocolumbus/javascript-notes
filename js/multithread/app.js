// index.js
// run with   node --experimental-worker app.js   on Node.js 10.x

const { Worker } = require('worker_threads');

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker1.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

async function run(i) {
    const max = Math.trunc(500 * Math.random()) + 500;
    const result = await runService({ max, i });
    console.log(result);
}

// Default is a maximum of 10 listeners
for (let i = 0; i < 9; i++) {
    console.log(i);
    run(i).catch((err) => console.error(err));
}
