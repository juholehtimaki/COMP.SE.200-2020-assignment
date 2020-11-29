import isLength from "../../src/isLength";

describe("isLength.js tests", () => {
  test("should return true if passed a number", () => {
    expect(isLength(3)).toBe(true);
  });
  test("should return false is passed a constant (e.g. Infinity or Number.MIN_VALUE)", () => {
    expect(isLength(Infinity)).toBe(false);
  });
  test("should return false is passed a string (also a number in string format)", () => {
    expect(isLength("3")).toBe(false);
  });
});
