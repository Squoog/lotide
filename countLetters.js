// assertEqual function
const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

// countLetters function
const countLetters = function(sentence) {
  let newObj = {};

  for (let char of sentence) {
    if (newObj[char]) {
      newObj[char] += 1;
    } else {
      newObj[char] = 1;
    }
  }
  return newObj;
};

// Test code
console.log(countLetters("cartoon banana"));
console.log(countLetters("horse house"));