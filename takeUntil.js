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

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
    return;
  }
  
  console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);     // Maybe not necessary to see every value of the arrays?
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

//takeUntil function

const takeUntil = function(array, callback) {
  for (const index in array) {
    if (callback(array[index])) { // the return built into the arrow function of the callback breaks the loop once condition is met
      const stopAt = index;
      const newLength = array.length - index;
      array.splice(stopAt, newLength);
    }
  }
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = [
  "If",
  "you're",
  "going",
  "to",
  "San",
  "Francisco"
];
const results2 = takeUntil(data2, (x) => x === "San");
console.log(results2);
assertArraysEqual(results2, ["If", "you're", "going", "to"]);