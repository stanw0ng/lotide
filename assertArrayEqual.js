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
  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);     // Maybe not necessary to see every value of the arrays?
  } else {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
  }
};