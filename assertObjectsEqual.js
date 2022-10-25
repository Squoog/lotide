//eqArrays
const eqArrays = require('./eqArrays');
//assertEquals
const assertEqual = require('./assertEqual');
//eqobjects
const eqObjects = require('./eqObjects');

// assertObjectsEqual FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let a = actual;
  let e = expected;
  let isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`👌  Assertion Passed: ${inspect(a)} === ${inspect(e)}`);
  } else {
    console.log(`🤔  Assertion Failed: ${inspect(a)} !== ${inspect(e)}`);
  }
};

// Exports function
module.exports = assertObjectsEqual;