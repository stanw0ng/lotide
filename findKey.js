// assertEqual for testing

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
};

// findKey function
const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, 'noma');