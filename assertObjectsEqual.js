function eqArrays(array0, array1) {
  if (array0.length !== array1.length) {
    return false;
  } else if (array0.length === array1.length) {
    return true;
  }
  for (let i = 0; i < array0.length; i++) {
    if (array0[i] !== array1[i]) {
     return false;
    } else if (array0[i] === array1[i]) {
      return true;
    }
  }
};
const eqObjects = function(object0, object1) {
  if (Object.keys(object0).length !== Object.keys(object1).length) {
    return false;
  }
  for (const keys of Object.keys(object0)) {
    if (Array.isArray(object0[keys]) && Array.isArray(object1[keys])) {
      return eqArrays(object0[keys], object1[keys]);
    }
    else if (object0[keys] !== object1[keys]) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    result = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    return result;
  }
  for (const keys of Object.keys(actual)) {
    if (Array.isArray(actual[keys]) && Array.isArray(expected[keys])) {
      return eqArrays(actual[keys], expected[keys]);
    }
    else if (actual[keys] !== expected[keys]) {
      result = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
      return result;
    }
  } 
  return result;
}

console.log(assertObjectsEqual({
  name: 'Lars',
  lastName: 'Yaeger'
}, {
  name: 'Lars',
  lastName: 'Yaeger'
}))