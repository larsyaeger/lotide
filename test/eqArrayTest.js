const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
//Test Case: Check the original array 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, '7'], [1, 2, 3, 7]), false); // => should PASS