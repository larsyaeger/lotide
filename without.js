function assertArraysEqual (array0, array1) {
  let result = `✅✅✅ Assertion Passed: ${array0} === ${array1}`;
  if (array0.length !== array1.length) {
    result = `🛑🛑🛑 Assertion Failed: ${array0} !== ${array1}`;
    return result;
  }
  for (i = 0; i < array0.length; i++) {
    if (array0[i] !== array1[i]) {
      result = `🛑🛑🛑 Assertion Failed: ${array0} !== ${array1}`;
    }
  } return result;
}

function eqArrays (array0, array1) {
  let result = true;
  if (array0.length !== array1.length) {
    result = false;
    return result;
  }
  for (i = 0; i < array0.length; i++) {
    if (array0[i] !== array1[i]) {
      result = false;
    }
  } return result;
}
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
