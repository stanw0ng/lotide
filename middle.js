//eqArray base logic

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

//assertArraysEqual function

const assertArraysEqual = function (array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
    return;
  }
  
  console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);
};

// middle function
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