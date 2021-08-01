const add = function (a, b) {
    return a + b;
};

// Only exports property of module is exported
// module.exports = {'add': add};

// also allowed, taking advantage of exports = module.exports unless it has been reassigned
exports.add = add;

// BAD! <-- reassigns the exports variable to be local and no export occurs
// exports = {"add":add}

console.log(`Main as viewed by adder.js: ${require.main.filename}`);

console.log(`__dirname = ${__dirname}`);
console.log(`__filename = ${__filename}`);
