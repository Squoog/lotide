const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length){
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false;
      }
    }
  }
  else{
    return false;
  }
  return true;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)  // => false