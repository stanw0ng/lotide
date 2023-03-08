//assertEqual function
const assertEqual = function(actual, expected) {
  let message = '';

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

//array function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  };

  return true
};

let result1 = assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
let result2 = assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); 

console.log(result1);
console.log(result2);