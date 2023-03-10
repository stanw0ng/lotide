// assertArraysEqual for checking

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
  }
};

// eqArrays for checking

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

// map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0] + "💋 *smooch*");
console.log(results1);
assertArraysEqual(results1, [
  'g💋 *smooch*',
  'c💋 *smooch*',
  't💋 *smooch*',
  'm💋 *smooch*',
  't💋 *smooch*'
]);

const test1 = [1, "two", 3];
const results2 = map(test1, () => "💋");
console.log(results2);
assertArraysEqual(results2, ["💋", "💋", "💋"]);

const test3 = [4 , 5, 6, 129];
const results3 = map(test3, item => item * 5 + 1);
console.log(results3);
assertArraysEqual(results3, [21, 26, 31, 646]);