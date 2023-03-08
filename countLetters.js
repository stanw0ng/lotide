const letterCount = function(string) {
  const result = {};
  for (let letter of string.toLowerCase()) {
    if (letter === " ") {
      continue;
    }
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  
  return result;
};

console.log(letterCount("honky tonk"));
console.log(letterCount("the lazy fox jumps over the brown dog"));