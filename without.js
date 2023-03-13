// without function
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

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);