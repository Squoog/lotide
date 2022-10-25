// eqArrays function
const eqArrays = require('./eqArrays');

//assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

// takeUntil function
const takeUntil = function(array, callback) {
  let newArr = [];
  for (let item in array) {
    if (callback(array[item])) {
      return newArr;
    } else {
      newArr.push(array[item]);
    }
  }
};

// Exports function
module.exports = takeUntil;