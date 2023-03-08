//assertEqual for testing
const assertEqual = function(actual, expected) {
  let message = '';

  if (actual === expected) {
    message += `👍 Assertion Passed: ${actual} === ${expected}`;
    return message;
  }
  
  if (actual !== expected) {
    message += `👎 Assertion Failed: ${actual} !== ${expected}`;
    return message;
  }

  return message;
};

//findKeyByValue function
const findKeyByValue = function(object, value) {
  let result = '';
  const keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === value) {
      result += key;
      break;
    }
  }

  return result;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));