const assertEqual = require('./assertEqual');

// findByKeyValue function
const findKeyByValue = function(obj, val){
  let key;
  let keyArray = Object.keys(obj);
  let count = 0;
  for (let item in obj) {
    if (obj[item] == val){
      key = keyArray[count];
    }

    count ++;
  }
  return key;
}

// Exports function
module.exports = findKeyByValue;