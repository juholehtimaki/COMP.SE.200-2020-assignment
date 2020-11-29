import endsWith from "../../src/endsWith";

describe("endsWith.js tests", () => {
  test("should return true when string ends with given character", () => {
    expect(endsWith("test", "t")).toBe(true);
  });
  test("should return false when string does not end with given character", () => {
    expect(endsWith("test", "s")).toBe(false);
  });
  test("should return true when string ends with given character at given length", () => {
    expect(endsWith("test", "e", 2)).toBe(true);
  });
});
