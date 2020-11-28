import toString from "../../src/toString.js";

describe("toString.js tests", () => {
  test("should stringify a number", () => {
    expect(toString(5)).toBe("5");
  });
  test("should stringify the contents of an array", () => {
    expect(toString([1, 2])).toBe("1,2");
  });
  test("should stringify strings", () => {
    expect(toString("abc")).toBe("abc");
  });
});
