// map function
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0] + "š *smooch*");
// console.log(results1);
// assertArraysEqual(results1, [
//   'gš *smooch*',
//   'cš *smooch*',
//   'tš *smooch*',
//   'mš *smooch*',
//   'tš *smooch*'
// ]);

// const test1 = [1, "two", 3];
// const results2 = map(test1, () => "š");
// console.log(results2);
// assertArraysEqual(results2, ["š", "š", "š"]);

// const test3 = [4 , 5, 6, 129];
// const results3 = map(test3, item => item * 5 + 1);
// console.log(results3);
// assertArraysEqual(results3, [21, 26, 31, 646]);