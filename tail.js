// Retrieves assertEqual function
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// Exports function
module.exports = tail;