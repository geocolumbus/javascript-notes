/*jshint esversion: 6 */
// Requires ES6
// Extended from arrays to objects in ES9
"use strict"

// Demonstrates shorthand property creation
// {"todos":[{"id":1,"text":"Learn ES6"},{"id":2,"text":"Practice! Practice!"},{"id":3,"text":"Teach it"}]}

const example1 = function () {
    console.log("Demonstrates shorthand property creation")
    let counter = 0,
        todos = [
            {id: ++counter, text: "Learn ES6"},
            {id: ++counter, text: "Practice! Practice!"},
            {id: ++counter, text: "Teach it"}
        ]
    // similar to { todos: todos }
    const ret = {todos}
    console.log(JSON.stringify(ret))
    console.log("------------------------------------------------")
    return ret
}

// Demonstrates shorthand accessors
// {"_name":"Hulk","name":"Hulk"}
// Hulk
const example2 = function () {
    console.log("Demonstrates shorthand accessors")
    const obj = {
        _name: 'Hulk',
        // getter/setters
        get name() {
            return this._name
        },
        set name(name) {
            this._name = name
        }
    }
    console.log(JSON.stringify(obj))
    console.log(obj.name) // invokes getter
    console.log("------------------------------------------------")
}

// Demonstrates computed property/method
// {"_name":"Hulk","fullName":"Hulk-a-mania"}
// Hulk-a-mania
// Hulk
const example3 = function () {
    console.log("Demonstrates computed property/method")
    const providePrefix = name => {
        return `my${name.substring(0, 1).toUpperCase()}${name.substring(1, name.length)}`

    }
    const obj = {
        _name: "Hulk",
        // computed property name
        ["fullName"]: "Hulk-a-mania",
        // computed method name
        [providePrefix("name")]() {
            return this._name
        }
    }
    console.log(JSON.stringify(obj))
    console.log(obj.fullName)
    console.log(obj.myName())
}

example1()
example2()
example3()