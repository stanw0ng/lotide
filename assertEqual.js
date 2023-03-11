// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  //Happy Path :)
  console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2, 2);
assertEqual("Nice");
assertEqual();