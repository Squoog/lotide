// assertEqual function
const assertEqual = require('./assertEqual');

// findKey function
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return (item);
    }
  }
};

// Exports function
module.exports = findKey;