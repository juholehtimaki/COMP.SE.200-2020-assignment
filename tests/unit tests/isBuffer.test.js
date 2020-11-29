import isBuffer from "../../src/isBuffer";

describe("isBuffer.js tests", () => {
  test("should return true if passed value is a buffer", () => {
    expect(isBuffer(new Buffer(2))).toBe(true);
  });
  test("should return false if passed value is not a buffer", () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
  });
});
