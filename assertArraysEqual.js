const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array0, array1) {
  if (eqArrays(array0, array1) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array0} === ${array1}`);
  } else if (eqArrays(array0, array1) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array0} !== ${array1}`);
  }
}
module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1])// => false










// function assertArraysEqual (array0, array1) {
//   let result = `✅✅✅ Assertion Passed: ${array0} === ${array1}`;
//   if (array0.length !== array1.length) {
//     result = `🛑🛑🛑 Assertion Failed: ${array0} !== ${array1}`;
//     return result;
//   }
//   for (i = 0; i < array0.length; i++) {
//     if (array0[i] !== array1[i]) {
//       result = `🛑🛑🛑 Assertion Failed: ${array0} !== ${array1}`;
//     }
//   } return result;
// }



// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1])// => false
