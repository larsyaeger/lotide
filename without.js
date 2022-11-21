const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
//without function should take 2 arrays and return a new array
//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]






function without (source, itemsToRemove) {
  let result = [];
  for (x = 0; x < source.length; x++) {
    if (source[x] !== itemsToRemove[x]) {
      result.push(source[x]);
    }
  } return result;
}

module.exports = without;