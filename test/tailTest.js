// import
const assert = require('chai').assert;
const tail = require('../tail');

describe("The function tail()", () => {
  it("returns 'Hello' for ['Hello', Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an empty array for single item arrays", () => {
    assert.deepEqual(tail(["Hey"]), []);; 
  });
});