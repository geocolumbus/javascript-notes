// List of array methods:
// https://www.w3schools.com/jsref/jsref_obj_array.asp

// ~~~ INITIALIZE ARRAYS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// a = [0,1,2,3,4,5,6,7,8,9]
const a = [...Array(10).keys()];
console.log(a);

let start = 10;
const length = 10;
// b = [10,11,12,13,14,15,16,17,18,19]
const b = [...Array(length).keys()]
    .map((item) => item + start);
console.log(b);

start = 10;
let end = 14;
// c = [10,11,12,13,14]
const c = [...Array(end - start + 1).keys()]
    .map((item) => item + start);
console.log(c);

start = -8;
end = -4;
// d = [-8,-7,-6,-5,-4]
const d = [...Array(end - start + 1).keys()]
    .map((item) => item + start);
console.log(d);

// e = [null,null,null,null,null,null]
const e = Array(6);
console.log(e);

// f = [255,255,255,255,255,255]
const f = Array(6).fill(0xFF);
console.log(f);
