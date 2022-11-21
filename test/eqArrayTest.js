const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe('#eqArray', () => {
  it ('[1,2,3] should be the same as [1,2,3]', () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it ('[1,2,3] shouldnt be the same as [1,2,3,4]', () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it ('[1,2,3] shouldnt be the same as [1,2,3,4]', () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it ('[1,2,3,"7"] shouldnt be the same as [1,2,3,7]', () => {
    assertEqual(eqArrays([1, 2, 3, '7'], [1, 2, 3, 7]), false);
  });
})


//Test Case: Check the original array 
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3, '7'], [1, 2, 3, 7]), false); // => should PASS