import add from "../../src/add";

describe("add.js tests", () => {
  test("should return the total correctly with two different numbers", () => {
    const calculatedNumber = add(5, 3);
    expect(calculatedNumber).toBe(8);
  });
  test("should return the total correctly even if one number is 0", () => {
    const calculatedNumber = add(5, 0);
    expect(calculatedNumber).toBe(5);
  });
});
