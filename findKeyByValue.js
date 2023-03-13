// findKeyByValue function
const findKeyByValue = function(object, value) {
  let result = '';
  const keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] !== value) {
      continue;
    }

    result += key;
    break;
  }

  return result;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);