const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    let inList = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        inList = true;
      }
      if (!inList) {
        newArr.push(source[i]);
      }
    }
  }
  console.log(newArr);
};

// Exports function
module.exports = without;