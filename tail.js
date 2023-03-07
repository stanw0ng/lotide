// FUNCTION IMPLEMENTATION
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

const tail = function(array) {
  if (!Array.isArray(array)) {
    return 'Invalid input. Please enter an array.';
  }
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: Checking single word array output
const word = ["Hey"];
const emptyArray = tail(word);
console.log(emptyArray);
assertEqual(emptyArray.length, word.length);