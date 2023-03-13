// import assertEqual
const assertHead = require('../head');
const assertEqual = require('../assertEqual')

// TEST CODE
assertEqual(assertHead([4,6,7]), 5);
assertEqual(assertHead(["Hello", "Lighthouse", "Labs"]), "Hello");
assertHead("9, 2 ,3", 9);