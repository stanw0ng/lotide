// import
const assert = require('chai').assert;
const middle = require("../middle");

// TEST CODE
describe("The function tail()", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [true] for [1, 2, 3, true, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, true, 5, 6, 7]), [true]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2, 3, true, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, true, 5, 6]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});