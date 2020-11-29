import toFinite from "../../src/toFinite";

describe("toFinite.js tests", () => {
  test("should return a number when passed a number", () => {
    const toFiniteNumber = toFinite(3.12);
    expect(toFiniteNumber).toBe(3.12);
  });
  test("should return a number when passed a number in string format", () => {
    const toFiniteNumber = toFinite("3.12");
    expect(toFiniteNumber).toBe(3.12);
  });
  test("should work on Finity constant", () => {
    const toFiniteNumber = toFinite(Infinity);
    expect(toFiniteNumber.toString()).toBe("1.7976931348623157e+308"); //stringifying the value for testing
  });
  test("should work on MIN.VALUE constant", () => {
    const toFiniteNumber = toFinite(Number.MIN_VALUE);
    expect(toFiniteNumber.toString()).toBe("5e-324"); //stringifying the value for testing
  });
});
