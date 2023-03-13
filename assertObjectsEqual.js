//eqObjects function
const eqObjects = require('./eqObjects');

//assertObjectEquals function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }
  
  console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

// const bird = { a: '1', b: 2 };
// const hawk = { b: 2, a: '1' };
// assertObjectsEqual(bird, hawk);