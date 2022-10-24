// Function implementation
const middle = function(array) {
  let newArr = [];
  if(array.length <= 2){
    return newArr;
  }
  let arrIsOdd = array.length % 2;
  if(arrIsOdd){
    newArr.push(array[Math.floor(array.length/2)]);
  }
  else{
    newArr.push(array[Math.floor(array.length/2)-1]);
    newArr.push(array[Math.floor(array.length/2)]);
  }
  return newArr;
}

// Exports function
module.exports = middle;