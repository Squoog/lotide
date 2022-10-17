// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("French Horn","French Horn");
assertEqual(1, 1);
assertEqual(2, 'two');
assertEqual(3, 4);