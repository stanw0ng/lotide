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

// letterPositions function

const letterPositions = function(sentence) {
  const positions = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (positions[letter]) {
      positions[letter].push(i);
    } else {
      positions[letter] = [i];
    }
  }
  return positions;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").o, [1]);