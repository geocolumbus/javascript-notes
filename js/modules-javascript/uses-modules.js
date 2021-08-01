/* import is part of ES6, but it is not supported in Node yet
import Adder from 'adder';
*/

// Instead, user require in node
const Adder = require('./adder');

const a = 3;
const b = 4;
const c = Adder.add(a, b);

console.log(`\n${a} + ${b} = ${c}\n`);

console.log(`Main as viewed by uses-adder.js: ${require.main.filename}`);

console.log(`__dirname = ${__dirname}`);
console.log(`__filename = ${__filename}`);

console.log('\n=============================================================================\n');

// Create instances via a factory pattern
const Factory = require('./factory.js');

const factory1 = Factory.create('George C.');
const factory2 = Factory.create('Alex C.');
factory1.log();
factory2.log();

console.log('');
