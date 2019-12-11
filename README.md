# Javascript Notes

The point of this project is to document how various javascript features work for my personal reference and learning purposes.

## Requirements

* nodejs - I'm on version 10.16.0 as of 11/2019

## Usage

```
git clone https://github.com/geocolumbus/javascript-notes.git
cd javascript-notes
npm install  # I don't use any dependencies yet so this does nothing.
```

You can run any file by typing ```node js/[filename]```.

For example, ```node js/maps.js``` outputs:

```
1 2
val = 1  key = one  map = [object Map]
val = 2  key = two  map = [object Map]
2
it.next() = {"value":["one",1],"done":false}
it.next() = {"value":["two",2],"done":false}
it.next() = {"done":true}
it.next() = {"value":"one","done":false}
it.next() = {"value":"two","done":false}
it.next() = {"done":true}
it.next() = {"value":1,"done":false}
it.next() = {"value":2,"done":false}
it.next() = {"done":true}
------------------------------------------------
val = 1  i = 0  arr = 1,2,3,4
val = 2  i = 1  arr = 1,2,3,4
val = 3  i = 2  arr = 1,2,3,4
val = 4  i = 3  arr = 1,2,3,4
[ 6, 7, 8, 9 ]
```

## Resources

### Documentation and Tutorials

* [JavaScript Info](https://javascript.info/)
* [JavaScript Questions](https://github.com/lydiahallie/javascript-questions/blob/master/README.md)

### Interview Questions

* [guru99](https://www.guru99.com/javascript-interview-questions-answers.html)
* [toptal](https://www.toptal.com/javascript/interview-questions)
* [edureka](https://www.edureka.co/blog/interview-questions/javascript-interview-questions/)

