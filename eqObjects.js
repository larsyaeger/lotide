function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
function eqArrays(array0, array1) {
  //let result = true;
  if (array0.length !== array1.length) {
  //  result = false;
    return false;
  } else if (array0.length === array1.length) {
    return true;
  }
  for (let i = 0; i < array0.length; i++) {
    if (array0[i] !== array1[i]) {
     // result = false;
     return false;
    } else if (array0[i] === array1[i]) {
      return true;
    }
  }// return result;
};
//returns true if both objects have identical keys with identical values
const eqObjects = function(object0, object1) {
  //checking that the keys length are the same
  if (Object.keys(object0).length !== Object.keys(object1).length) {
    return false;
  }
  //checking that the values associated with keys are the same length
  // if (Object.values(object0).length !== Object.values(object1).length) {
  //   return false;
  //}
  //checking the arrays 
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
//first compare / check length, if not same then return false
//if they are the same then it means you have to loop through the values and compare
//in loop: if theyre both arrays then we do the eq array function which basically
//checks if the items in the array are the same and returns false or true
//if they are not both arrays then we check the keys themselves, if they are not the same they're false
//if it passes all of that its true
//will use : Object.keys, Array.isArray

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false