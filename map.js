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

const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(words2, word => word[0]);
console.log(results2);
const results3 = map(words3, word => word.length);
console.log(results3);
const results4 = map(words4, word => word[word.length - 1 ]);
console.log(results4);