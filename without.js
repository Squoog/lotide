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

const assertArraysEqual = function(array1,array2) {

  let isEqual = eqArrays(array1, array2);
  if (isEqual) {
    console.log(`👌  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤔  Assertion Failed: ${array1} !== ${array2}`);
  }
};


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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);