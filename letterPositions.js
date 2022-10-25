// letterPositions function
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let char in sentence) {
    if (results[sentence[char]]) {
      results[sentence[char]].push(char);
    } else {
      results[sentence[char]] = [char];
    }
  }
  delete results[' '];
  return results;
};

// Exports function
module.exports = letterPositions;