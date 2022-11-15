//copy and pasted function from assertEqual.js

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}


const tail = function(array) {
  let result = [];
  for (i = 1; i < array.length; i++){
    result.push(array[i]);
  } 
  return result
}


// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let result = tail(words);
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');