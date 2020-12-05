import toInteger from "../../src/toInteger.js";

describe("toInteger.js tests", () => {
  it("Float should be converter to integer", () => {
    expect(toInteger(3.2)).toBe(3);
  });

  it("Min value should be 0", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  it("Infinity should be 1.7976931348623157e308", () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e308);
  });

  it("Float as string should be converted to integer", () => {
    expect(toInteger("3.2")).toBe(3);
  });
});
