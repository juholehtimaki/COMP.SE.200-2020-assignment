import toString from "../src/toString.js";

//Random comment to trigger the build

describe("toString.js tests", () => {
  test("should stringify a number", () => {
    expect(toString(5)).toBe("5");
  });
});
