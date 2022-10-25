const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["yam", "egg", "eggplant", "tomato"];
const words3 = ["hat", "oat", "hat"];
const words4 = ["apple", "banana", "cheese"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

  console.log('array: ', array);
  console.log('callback: ', callback);
};

// Exports function
module.exports = map;