import filter from "../src/filter.js";

describe("filter.js tests", () => {
  test("should filter an array based on the predicate", () => {
    const arr = [1, 2, 3];
    const predicate = (x) => x === 3;
    const expectedArr = [3];
    expect(filter(arr, predicate)).toEqual(expectedArr);
  });
});
