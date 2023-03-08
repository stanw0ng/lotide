// ARRAY ASSERTION FUNCTION
const assertArraysEqual = function(array1, array2) {
  let message = "";

  if (array1.length !== array2.length) {
    message += `👎 Assertion Failed: the arrays are not the same `;
    return message;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      message += `👎 Assertion Failed: the arrays are not the same`;
      return message;
    }
  }

  message += `👍 Assertion Passed: the arrays are equal`;
  return message;
};

// ACTUAL FUNCTION
const middle = function(array) {
  const result = [];
  
  if(array.length % 2 !== 0) {
    const midIndex = ((array.length-1)/2);
    result.push(array[midIndex]);
    return result
  }
  
  return result;
}

// TEST CODE
let result = middle([1, 2, 3]);
console.log(result);
result = middle([1, 2, 3, true, 5, 6, 7]);
console.log(result);
result = middle([1, 2, 3, true, 5, 6]);
console.log(result);