import isArrayLike from "../../src/isArrayLike";

describe("isArrayLike.js tests", () => {
  test("should return true if passed an array", () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });
  test("should return true if passed a document", () => {
    expect(isArrayLike(document.body.children)).toBe(true);
  });
  test("should return true if passed a string", () => {
    expect(isArrayLike("test")).toBe(true);
  });
  test("should return false if passed a function", () => {
    expect(isArrayLike(() => {})).toBe(false);
  });
});
