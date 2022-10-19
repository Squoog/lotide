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

// ACTUAL FUNCTION
const middle = function(array) {
  let newArr = [];
  if(array.length <= 2){
    return newArr;
  }
  let arrIsOdd = array.length % 2;
  if(arrIsOdd){
    newArr.push(array[Math.floor(array.length/2)]);
  }
  else{
    newArr.push(array[Math.floor(array.length/2)-1]);
    newArr.push(array[Math.floor(array.length/2)]);
  }
  return newArr;
}

// TEST CODE
// ...

console.log(middle([1,3,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9,0]));

assertArraysEqual(middle([1, 2, 3, 4]),[2,3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]