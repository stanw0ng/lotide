// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let message = '';

  if (actual === undefined && expected === undefined) {
    message += '💥 Error: actual and expected values not provided';
    return message;
  }

  if (expected === undefined) {
    message += '💥 Error: expected value not provided';
    return message;
  }

  if (actual === expected) {
    message += `👍 Assertion Passed: ${actual} === ${expected}`;
    return message;
  }
  
  if (actual !== expected) {
    message += `👎 Assertion Failed: ${actual} !== ${expected}`;
    return message;
  }

  return message;
};

// TEST CODE
const result1 = assertEqual("Lighthouse Labs", "Bootcamp");
const result2 = assertEqual(2, 2);
const result3 = assertEqual("Nice");
const result4 = assertEqual();

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);