// middle function
const middle = function(array) {
  const result = [];

  if(array.length === 1) {
    return result
  }
  
  if(array.length % 2 !== 0) {
    const midIndex = ((array.length-1)/2);
    result.push(array[midIndex]);
    return result
  }
  
  return result;
}

module.exports = middle;