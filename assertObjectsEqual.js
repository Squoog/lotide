// assertEquals function
const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


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


// Test Code
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd,dc);
assertObjectsEqual(ba,ab);
assertObjectsEqual(abc,ab);
*/