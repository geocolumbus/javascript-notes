(function () {
    // the for .. of loop automatically invokes 'next'
    const arr = [10, 20, 30];
    for (const i of arr) {
        console.log(i);
    }
}());

console.log('-------------------------------------------------------------');

(function () {
    // Maps
    for (const [k, v] of new Map([['a', 1], ['b', 2]])) {
        console.log(k, '->', v);
    }
    // Sets
    for (const k of new Set(['a', 'b', 'a'])) {
        console.log(k);
    }
    // Strings
    for (const c of 'ES6 Rocks!!') {
        console.log(c);
    }
}());

console.log('-------------------------------------------------------------');

(function () {
    // you can define custom iterators for your own
// objects by tacking a iterator property on it
// The iterator should be a function that
// returns an object that responds to the 'next' call
    const iterableObj = {
        upperLimit: 10,
        [Symbol.iterator]() {
            // iterator is a function
            const that = this;
            // that returns an object
            return {
                cur: 0,
                // that has the next function defined
                next() {
                    if (this.cur < that.upperLimit) {
                        const ret = this.cur;
                        this.cur++;
                        return { value: ret, done: false };
                    }
                    this.cur = 0;
                    return { done: true };
                },
            };
        },
    };
    for (const i of iterableObj) console.log(i); // 0,1,2,…,9
}());
