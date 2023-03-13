//takeUntil function
const takeUntil = function(array, callback) {
  for (const index in array) {
    if (callback(array[index])) { // the return built into the arrow function of the callback breaks the loop once condition is met
      const stopAt = index;
      const newLength = array.length - index;
      array.splice(stopAt, newLength);
    }
  }
  return array;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = [
//   "If",
//   "you're",
//   "going",
//   "to",
//   "San",
//   "Francisco"
// ];
// const results2 = takeUntil(data2, (x) => x === "San");
// console.log(results2);
// assertArraysEqual(results2, ["If", "you're", "going", "to"]);