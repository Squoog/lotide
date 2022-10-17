const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

const head = function(arr){
  return arr[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 7);
assertEqual(head([]), 1);