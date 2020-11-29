import defaultTo from "../../src/defaultTo";

describe("defaultTo.js tests", () => {
  test("should return the passed value correctly when it's number", () => {
    expect(defaultTo(1, 10)).toBe(1);
  });
  test("should return given default value when given NaN", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });
  test("should return given default value when given null", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });
  test("should return given default value when given undefined", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });
});
