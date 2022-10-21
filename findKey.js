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

// findKey function
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return (item);
    }
  }
};

// Test code
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

// More test code
assertEqual(findKey({a: { stars: 1 },b: { stars: 2 },c: { stars: 5 },d: { stars: 2 }}, x => x.stars === 2),'b');
assertEqual(findKey({a: { stars: 2 },b: { stars: 9 },c: { stars: 5 },d: { stars: 2 }}, x => x.stars === 2),'a');
assertEqual(findKey({a: { stars: 3 },b: { stars: 9 },c: { stars: 5 },d: { stars: 2 }}, x => x.stars === 2),'d');