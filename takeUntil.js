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

//assertArraysEqual function
const assertArraysEqual = function(array1,array2) {

  let isEqual = eqArrays(array1, array2);
  if (isEqual) {
    console.log(`👌  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤔  Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);
