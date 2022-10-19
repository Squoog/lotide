const assertEqual = function(actual, expected) {
  let a = actual;
  let e = expected;
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${a} === ${e}`);
  } else {
    console.log(`🤔  Assertion Failed: ${a} !== ${e}`);
  }
};

// countOnly function
const countOnly = function(allItems, itemsToCount) {
  const newObj = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (newObj[item]){
        newObj[item] += 1;
      }
      else{
        newObj[item] = 1;
      }
    }
  }
  return newObj;
};


// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
