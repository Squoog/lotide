// assertEquals function
const assertEqual = require('./assertEqual');
// eqArrays function
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let isEqual = true;
  if (keys1.length === keys2.length) {
    for (key in keys1) {

      let isArr1;
      let isArr2;

      if (Array.isArray(object1[keys1[key]])) {
        isArr1 = true;
      }
      if (Array.isArray(object2[keys1[key]])) {
        isArr2 = true;
      }

      if (isArr1 & isArr2) {
        if ((eqArrays(object1[keys1[key]], object2[keys1[key]])) === false) {
          return false;
        }
      } else if (object1[keys1[key]] !== object2[keys1[key]]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return isEqual;
};

// Exports function
module.exports = eqObjects;