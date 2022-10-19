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

// Test code
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));