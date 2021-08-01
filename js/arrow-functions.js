const f = function (x, y) {
    return [x, y];
};

// [6,7]
console.log(f(6, 7));

const f1 = (x, y) => [x, y];

// [3,4]
console.log(f1(3, 4));

const f2 = function () {
    return 3;
};

// 3
console.log(f2());

const f3 = () => 3;

// 3
console.log(f2());

console.log('-----------------------------------------------------');

// 10
(function () {
    // single args don't need parentheses
    const fatOne = (val) => val;
    console.log(fatOne(10)); // 10
}());

console.log('-----------------------------------------------------');

// [ 'js', 'next' ]
(function () {
    // multiple args have to have parentheses
    const fatTwo = (a, b) => [a, b];
    console.log(fatTwo('js', 'next'));
}());

console.log('-----------------------------------------------------');

// I have no args
(function () {
    // no args have to have parentheses
    // without curly brackets 'return' is implicit
    const fatFive = () => 'I have no args';
    console.log(fatFive()); // I have no args
}());

console.log('-----------------------------------------------------');

// Hello! My name is raju
(function () {
    function Person(name) {
        this.name = name;
        this.sayHello = () => `Hello! My name is ${this.name}`;
    }

    const me = new Person('raju');
    // CANNOT Change 'this'
    const obj = {};
    console.log(me.sayHello.call(obj)); // "Hello! My name is raju"
}());
