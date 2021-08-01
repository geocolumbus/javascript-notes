const arr = [1, 2, 3, 4];

// [ 1, 2, 3, 4 ]
console.log(arr);

// 1 2 3 4
console.log(...arr);

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b];

// [ 1, 2, 3, 4, 5, 6 ]
console.log(c);

console.log('-------------------------------------------');

function moveFirstToLast(a, ...b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    return [...b, a];
}

// a = 1
// b = 2,3,4,5,6
// [ 2, 3, 4, 5, 6, 1 ]
console.log(moveFirstToLast(1, 2, 3, 4, 5, 6));
