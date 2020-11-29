import isObjectLike from "../../src/isObjectLike";

describe("isObjectLike.js tests", () => {
  test("should return true if passed an object", () => {
    expect(isObjectLike({})).toBe(true);
  });
  test("should return true if passed an array", () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });
  test("should return false if passed a function", () => {
    expect(isObjectLike(() => {})).toBe(false);
  });
  test("should return true if passed a null value", () => {
    expect(isObjectLike(null)).toBe(false);
  });
});
