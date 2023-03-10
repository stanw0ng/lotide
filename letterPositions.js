//assertArraysEqual for checking

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion: Passed, ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion: Failed, ${array1} !== ${array2}`);
  }
};

//eqArrays for checking

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

// letterPositions function

const letterPositions = function(sentence) {
  const positions = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
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