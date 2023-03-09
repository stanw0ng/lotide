//eqArrays for checking objects with array values
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

//eqObjects function

const eqObjects = function(object1, object2) {
  const firstKeys = Object.keys(object1);
  const secondKeys = Object.keys(object2);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (let key of firstKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

//assertObjectEquals function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const bird = { a: '1', b: 2 };
const hawk = { b: 2, a: '1' };
assertObjectsEqual(bird, hawk);