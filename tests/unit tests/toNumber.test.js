import toNumber from "../../src/toNumber";

describe("toNumber.js tests", () => {
  test("should return the same number back when passed a number", () => {
    const num = toNumber(5);
    expect(num).toBe(5);
  });
  test("should return the same number back when passed a number if double", () => {
    const num = toNumber(5.21);
    expect(num).toBe(5.21);
  });
  test("should convert a number in stringformat to a number", () => {
    const num = toNumber("5");
    expect(num).toBe(5);
  });
  test("should return NAN if the passed parameter is not a number", () => {
    const num = toNumber("test");
    expect(num).toBe(NaN);
  });
  test("should work on constant such as Infinity", () => {
    const num = toNumber(Infinity);
    expect(num).toBe(Infinity);
  });
});
