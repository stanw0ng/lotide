//eqArray base logic
const eqArrays = require('./eqArray');

//assertArraysEqual function
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
    return;
  }
  
  console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);     // Maybe not necessary to see every value of the arrays?
};

module.exports = assertArraysEqual;