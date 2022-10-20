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


// Test Code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

console.log(eqObjects(ab,ba));
console.log(eqObjects(ab,abc));


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

console.log(eqObjects(cd, dc));
console.log(eqObjects(cd, cd2));