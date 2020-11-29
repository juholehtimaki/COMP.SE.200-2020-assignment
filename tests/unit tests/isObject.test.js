import isObject from "../../src/isObject";

describe("isObject.js tests", () => {
  test("object should return true", () => {
    const obj = { test: 1 };
    expect(isObject(obj)).toBe(true);
  });

  test("array should return true", () => {
    const arr = ["test"];
    expect(isObject(arr)).toBe(true);
  });

  test("function should return true", () => {
    const fn = () => {};
    expect(isObject(fn)).toBe(true);
  });

  test("null should return false", () => {
    const nullVariable = null;
    expect(isObject(nullVariable)).toBe(false);
  });

  test("string should return false", () => {
    const string = "test";
    expect(isObject(string)).toBe(false);
  });

  test("number should return false", () => {
    const number = 123;
    expect(isObject(number)).toBe(false);
  });
});
