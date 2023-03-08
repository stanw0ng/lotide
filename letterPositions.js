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
console.log(assertArraysEqual(letterPositions("hello").o, [1]));