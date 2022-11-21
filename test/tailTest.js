const assertEqual = require('../assertEqual');
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
const assert = require('chai').assert;

describe('#tail', () => {
  it ("original array shouldn't be altered after function is called", () => {
    assert.strictEqual(words.length, 3);
  });
  it ('should return 2 when called on 3 element array', () => {
    assert.strictEqual(result.length, 2);
  })
  it ('should return lighthouse', () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it ('const words = ["hello", "Lighthouse", "Labs", result = tail(words)', () => {
    assert.strictEqual(result[1], 'Labs');
  });
})









// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(result.length, 2);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');