// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? `👍 Assertion Passed: ${actual} === ${expected}` : `👎 Assertion Failed: ${actual} !== ${expected}`;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);