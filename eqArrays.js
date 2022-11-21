const assertEqual = require('./assertEqual');



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

module.exports = eqArrays;