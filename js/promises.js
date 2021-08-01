// see http://www.datchley.name/promise-patterns-anti-patterns/

const p1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1 OK ');
        }, 800);
    });
};

const p2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2 OK ');
        }, 200);
    });
};

const p3 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p3 OK ');
        }, 1200);
    });
};

const resCon = function (res) {
    console.log(`Consecutively resolved: ${res}`);
};
const resSim = function (res) {
    console.log(`Simultaneously resolved: ${res}`);
};
const resRace = function (res) {
    console.log(`Race resolved: ${res}`);
};
const rej = function (rej) {
    console.log(`resolved: ${rej}`);
};

// Resolve consecutively - depend on each step
p1()
    .then(p1)
    .then(p2)
    .then(p3)
    .then(resCon)
    .catch(rej);

// Resolve simultaneously - independant of each other
Promise.all([p1(), p2(), p3()]).then(resSim).catch(rej);

// Resolve the first that resolves
Promise.race([p1(), p2(), p3()]).then(resRace).catch(rej);

// Promise looping

// Given async function sayHi
function sayHi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hi');
            resolve();
        }, 50);
    });
}

// And an array of async functions to loop through
const asyncArray = [sayHi, sayHi, sayHi];

// We create the start of a promise chain
let chain = Promise.resolve();

// And append each function in the array to the promise chain
for (const func of asyncArray) {
    chain = chain.then(func);
}

// async from ES2017

function resolveAfterTimeDelay(msec, val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, msec);
    });
}

// old way

function add(x, y) {
    return new Promise((resolve) => resolveAfterTimeDelay(800, x).then((val1) => resolveAfterTimeDelay(300, y).then((val2) => {
        resolve(val1 + val2);
    })));
}

add(3, 4).then((val) => {
    console.log(`The chained promise sum is ${val}`);
});

// async way

async function asyncAdd(x, y) {
    const val1 = await resolveAfterTimeDelay(1700, x);
    const val2 = await resolveAfterTimeDelay(900, y);
    return val1 + val2;
}

asyncAdd(12, 19).then((val) => {
    console.log(`The async/await sum is ${val}`);
});
