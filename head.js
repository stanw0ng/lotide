// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
};

const assertHead = function(array) {
  return array[0];
}

// TEST CODE
assertEqual(assertHead([5,6,7]), 5);
assertEqual(assertHead(["Hello", "Lighthouse", "Labs"]), "Hello");