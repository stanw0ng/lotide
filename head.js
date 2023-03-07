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

const assertHead = function(array) {
  if (!Array.isArray(array)) {
    return '💥 Invalid input. Please enter an array.';
  }

  return array[0];
};

// TEST CODE
const result1 = assertEqual(assertHead([5,6,7]), 5);
const result2 = assertEqual(assertHead(["Hello", "Lighthouse", "Labs"]), "Hello");
const result3 = assertHead("9, 2 ,3");

console.log(result1);
console.log(result2);
console.log(result3);