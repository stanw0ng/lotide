// import
const assertArraysEqual = require("../assertArrayEqual");
const middle = require("../middle");

// TEST CODE
let result = middle([1, 2, 3]);
console.log(result);
assertArraysEqual(result, [2]);

result = middle([1, 2, 3, true, 5, 6, 7]);
console.log(result);
assertArraysEqual(result, [true]);

result = middle([1]);
console.log(result);
assertArraysEqual(result, []);

result = middle([1, 2, 3, true, 5, 6]);
console.log(result);
assertArraysEqual(result, []);

result = middle([]);
console.log(result);
assertArraysEqual(result, []);
