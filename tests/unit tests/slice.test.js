import slice from "../../src/slice";

const testArr = [1, 2, 3, 4, 5];
const emptyArr = [];

describe("slice.js tests", () => {
  test("should slice an array, starting from index 0 if no index specified", () => {
    const result = slice(testArr, 3);
    expect(result).toEqual([4, 5]);
  });
  test("should slice an array, starting from the specified index", () => {
    const result = slice(testArr, 1, 3);
    expect(result).toEqual([2, 3]);
  });
  test("should return empty array if given an empty array", () => {
    const result = slice(emptyArr, 1, 3);
    expect(result).toEqual([]);
  });
});
