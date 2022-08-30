const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [5,6]), true);
// assertEqual(eqArrays(middle([1,2,34,57,8645,10]), [34,57]), true);
// assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [34,57]), true);
// assertEqual(eqArrays(middle([1,2,34,57,7263,8645,10]), [57]), true);