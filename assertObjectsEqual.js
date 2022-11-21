const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')
const assertObjectsEqual = function (object0, object1) {
  if (eqObjects(object0, object1) === true) {
    console.log(`✅✅✅ Assertion Passed: ${object0} === ${object1}`);
  } else if (eqObjects(object0, object1) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${object0} !== ${object1}`)
  }
}
module.exports = assertObjectsEqual;
// console.log(assertObjectsEqual({
//   name: 'Lars',
//   lastName: 'Yaeger'
// }, {
//   name: 'Lars',
//   lastName: 'Yaeger'
// }))


// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect;
//   let result = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
//   if (Object.keys(actual).length !== Object.keys(expected).length) {
//     result = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
//     return result;
//   }
//   for (const keys of Object.keys(actual)) {
//     if (Array.isArray(actual[keys]) && Array.isArray(expected[keys])) {
//       return eqArrays(actual[keys], expected[keys]);
//     }
//     else if (actual[keys] !== expected[keys]) {
//       result = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
//       return result;
//     }
//   } 
//   return result;
// }