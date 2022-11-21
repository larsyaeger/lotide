const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it ("arrays [1,2,3,4] and [2,2,3,6] should have the same middle values", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), middle([2, 2, 3, 6]));
  })
})
//assertArraysEqual(middle([1, 2, 3, 4]), middle([2, 2, 3, 6]));