// assertHead function

const assertHead = function(array) {
  if (!Array.isArray(array)) {
    console.log("💥 Invalid input. Please enter an array.");
  }

  return array[0];
};

module.exports = assertHead;