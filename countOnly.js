const assertEqual = function(actual, expected) {
  let message = '';

  if (expected === undefined) {
    message += '💥 Error: expected value not provided';
    return message;
  }

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

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);