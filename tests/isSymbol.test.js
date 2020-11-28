import isSymbol from "../src/isSymbol.js";

describe("isSymbol.js tests", () => {
  test("should return true if value is a symbol", () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });
  test("should return false if value (string) is not a symbol", () => {
    expect(isSymbol("abc")).toBe(false);
  });
  test("should return false if value (number) is not a symbol", () => {
    expect(isSymbol(123)).toBe(false);
  });
});
