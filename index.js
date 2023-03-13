// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const letterCount = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArray');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArrayEqual');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without')

module.exports = {
  
  head: head,
  tail: tail,
  middle: middle,
  letterCount: letterCount,
  countOnly: countOnly,
  findKey: findKey,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  assertArraysEqual: assertArraysEqual,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without

};