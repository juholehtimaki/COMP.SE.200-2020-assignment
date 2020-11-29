import isTypedArray from "../../src/isTypedArray";

describe("isTypedArray.js tests", () => {
  test("should return true when passed a value that is classified as a typed array", () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
  });
  test("should return false when passed an regular array", () => {
    expect(isTypedArray([])).toBe(false);
  });
});
