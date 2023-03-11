// assertEqual to check
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
};

// tail function

const tail = function(array) {
  if (!Array.isArray(array)) {
    console.log('Invalid input. Please enter an array.');
    return;
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