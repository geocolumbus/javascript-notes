"use strict"

// see https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

// =====================================================
// Regular Functions
// =====================================================

// --- Simple Invocation ------------------------------
function one() {
    console.log(`one(), this=${this}`)
}

// undefined when "use strict" is on
// [object global] when "use strict" is off
one()

// --- Method Invocation ------------------------------

const myObject = {
    method() {
        console.log(this)
    }
}

// { method: [Function: method] }
console.log(myObject)

// { method: [Function: method] }
myObject.method()

// --- Indirect Invocation ----------------------------

function myFunction() {
    console.log(this);
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

// --- Constructor Invocation --------------------------

// myFunction {} <-- newly created instance
const newInstance = new myFunction()

// myFunction {}
console.log(newInstance)

console.log("\n----------------------")

// =====================================================
// Arrow Functions
// =====================================================

const myArrowObject = {
    myMethod(items) {
        console.log(this); // logs myArrowObject
        console.log("")
        const callback = () => {
            console.log(this); // logs myArrowObject
        };
        items.forEach(callback);
    }
};

// { myMethod: [Function: myMethod] }
//
// { myMethod: [Function: myMethod] } <- this passed to callback for 1
// { myMethod: [Function: myMethod] } <- this passed to callback for 2
myArrowObject.myMethod([1, 2]);

// { myMethod: [Function: myMethod] }
console.log(' ')
console.log(myArrowObject)
