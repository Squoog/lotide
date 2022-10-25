//const eqArrays = require('../eqArrays');
//const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle');

// TEST CODE
// ...
/*
console.log(middle([1,3,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9,0]));

assertArraysEqual(middle([1, 2, 3, 4]),[2,3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]
*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });
});