import isDate from "../../src/isDate.js";

describe("isDate.js tests", () => {
  it("should return true if passed value is a Date object", () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
  });

  it("should return false if passed value is a Date object", () => {
    const notDate = "12 March 2020";
    expect(isDate(notDate)).toBe(false);
  });

  it("should return false if passed value is a Date object", () => {
    const notDate = 1231231231231;
    expect(isDate(notDate)).toBe(false);
  });
});
