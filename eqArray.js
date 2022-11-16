function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, '7'], [1, 2, 3, 7]), false); // => should PASS