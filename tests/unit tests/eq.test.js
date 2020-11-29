import eq from "../../src/eq";

const object1 = {
  a: 1
};

const object2 = {
  a: 1
};

describe("eq.js tests", () => {
  test("should return true when the objects are equivalents", () => {
    expect(eq(object1, object1)).toBe(true);
  });
  test("should return false when the objects are not equivalents", () => {
    expect(eq(object1, object2)).toBe(false);
  });
  test("should return true if strings are the same", () => {
    expect(eq("test", "test")).toBe(true);
  });
  test("should return false if strings are not the same", () => {
    expect(eq("test", "testt")).toBe(false);
  });
  test("should return true if the constants are the same (NaN)", () => {
    expect(eq(NaN, NaN)).toBe(true);
  });
  test("should return false if given different type of values", () => {
    expect(eq("test", Object("test"))).toBe(false);
  });
});
