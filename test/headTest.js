// import
const assert = require('chai').assert;
const head = require('../head');

// TEST CODE
// assertEqual(assertHead([4,6,7]), 5);
// assertEqual(assertHead(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertHead("9, 2 ,3", 9);

describe("The function head()", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 4 for [4, 6, 7]", () => {
    assert.strictEqual(head([4, 6, 7]), 4);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("returns undefined for non-arrays", () => {
    assert.strictEqual(head("9, 2 ,3"), undefined);
  });
});