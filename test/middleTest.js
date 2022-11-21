const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([1, 2, 3, 4]), middle([2, 2, 3, 6]));