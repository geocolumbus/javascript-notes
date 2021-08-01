// Supported in node 14
// jshint has no idea

const a = false ?? 'string';
const b = NaN ?? 'string';
const c = undefined ?? 'string';

// false NaN string
console.log(a, b, c);

let d;
const e = d?.person?.name ?? 'Handled deep fail';

// Handled deep fail
console.log(e);
