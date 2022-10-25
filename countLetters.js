// assertEqual function
const assertEquals = require('./assertEquals');

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

// Exports function
module.exports = countLetters;