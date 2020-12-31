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

console.log()

// *** Good example of why arrow functions are needed ***

const person = {
    name: "George",
    // The context falls through into the arrow function.
    sayer: function () {
        // this === person
        return (val) => {
            console.log(`${val} ${this.name}`);
        };
    },
    // The context must be passed to the enclosed function
    // because functions always reference the root context.
    otherSayer: function () {
        // this === person
        const that = this;
        return function (val) {
            // this === undefined ('use strict' enabled)
            console.log(`${val} ${that.name}`);
        };
    }
};

const mySayer = person.sayer();
mySayer("Mr.");

const myOtherSayer = person.otherSayer();
myOtherSayer("Mrs.");

