const assertEqual = require('./assertEqual');

// countOnly function
const countOnly = function(allItems, itemsToCount) {
  const newObj = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (newObj[item]) {
        newObj[item] += 1;
      } else {
        newObj[item] = 1;
      }
    }
  }
  return newObj;
};

// Exports function
module.exports = countOnly;