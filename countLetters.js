const letterCount = function(string) {
  const result = {};
  
  for (let letter of string.toLowerCase()) {
    if (letter === " ") {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 0;
    }
    
    result[letter] ++;
  }
  
  return result;
};

module.exports = letterCount;

// console.log(letterCount("honky tonk"));
// console.log(letterCount("the lazy fox jumps over the brown dog"));