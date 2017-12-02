// Purity

// Pure
const sum = (a, b) => a + b;

// No Pure
let x;
const sum = y => (x = x + y);

// Immutability

// Bad
const push3 = arr => arr.push(3);
const myArr = [1, 2];
push3(myArr) // [1, 2, 3]
push3(myArr) // [1, 2, 3, 3]

// Good
const concat3 = arr => arr.concat(3);
const myArr = [1, 2];
const result1 = push3(myArr) // [1, 2, 3]
const result2 = push3(myArr) // [1, 2, 3]

// Currying
const add = x => y => x + y;
const add1 = add(1);
add1(2) // 3
add1(3) // 4

// in ES5
var add = function(x) {
  return function(y) {
    return x + y;
  }
}

// Composition
const add = (x, y) => x + y;
const square = x => x * x;

const addAndSquare = (x, y) => square(add(x, y));
