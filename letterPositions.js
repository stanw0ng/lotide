// letterPositions function
const letterPositions = function(sentence) {
  const positions = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (!positions[letter]) {
      positions[letter] = [];
    }
    
    positions[letter].push(i);
  }
  return positions;
};

module.exports = letterPositions;

// console.log(letterPositions("San Francisco"));
// assertArraysEqual(letterPositions("San Francisco").a, [1,6]);