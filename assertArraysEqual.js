// Retrieves eqArrays function
const eqArrays = require('./eqArrays');

// Funtcion implementation 
const assertArraysEqual = function(array1,array2) {

  let isEqual = eqArrays(array1, array2);
  if (isEqual) {
    console.log(`👌  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤔  Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Exports function
module.exports = assertArraysEqual;