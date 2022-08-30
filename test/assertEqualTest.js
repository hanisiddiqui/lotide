const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Lighthouse Labs", "Lighthouse Labs.");
// assertEqual(100, 100);
// assertEqual(101, 100);