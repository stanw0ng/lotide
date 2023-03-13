// import
const eqArrays = require('./eqArray')

// eqObjects function
const eqObjects = function(object1, object2) {
  const firstKeys = Object.keys(object1);
  const secondKeys = Object.keys(object2);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (let key of firstKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));