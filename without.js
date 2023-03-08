//for last case
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

const without = function(array, itemsToRemove) {
  const cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (!itemsToRemove.includes(currentItem)) {
      cleanArray.push(currentItem);
    }
  }

  return cleanArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);