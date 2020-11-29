import divide from "../../src/divide";

describe("divide.js tests", () => {
  test("should return the division of numbers", () => {
    expect(divide(10, 5)).toBe(2);
  });
});
