// assertEqual for testing

const assertEqual = require('./assertEqual');

// tail function

const tail = function(array) {
  if (!Array.isArray(array)) {
    console.log('Invalid input. Please enter an array.');
    return;
  }
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;