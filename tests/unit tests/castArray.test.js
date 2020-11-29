import castArray from "../../src/castArray";

describe("castArray.js tests", () => {
  test("should cast number into array", () => {
    expect(castArray(1)).toEqual([1]);
  });
  test("should cast string into array", () => {
    expect(castArray("test")).toEqual(["test"]);
  });
  test("should cast object into array", () => {
    expect(castArray({ test: 123 })).toEqual([{ test: 123 }]);
  });
  test("should cast null into array", () => {
    expect(castArray(null)).toEqual([null]);
  });
  test("should cast undefined into array", () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });
  test("should return an empty array if no parameters were given", () => {
    expect(castArray()).toEqual([]);
  });
  test("should return the same array when given an array", () => {
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
