// assertHead function
const assertHead = function(array) {
  if (!Array.isArray(array)) {
    return;
  }

  return array[0];
};

module.exports = assertHead;