// Rest for Objects
const { first, second, ...others } = {
    first: 1, second: 2, third: 3, fourth: 4, fifth: 5,
};

console.log(first); // 1
console.log(second); // 2
console.log(others); // { third: 3, fourth: 4, fifth: 5 }

console.log();

// Spread for Objects
const items = { first, second, ...others };
console.log(items); // { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
