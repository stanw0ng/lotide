// assertEqual for testing

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
  
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertHead function

const assertHead = function(array) {
  if (!Array.isArray(array)) {
    console.log("💥 Invalid input. Please enter an array.");
  }

  return array[0];
};

// TEST CODE
assertEqual(assertHead([5,6,7]), 5);
assertEqual(assertHead(["Hello", "Lighthouse", "Labs"]), "Hello");
assertHead("9, 2 ,3", 9);