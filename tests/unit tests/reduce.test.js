import reduce from "../../src/reduce";

describe("reduce.js tests", () => {
  test("should return the sum of elements when iterating over an array", () => {
    const arr = [1, 2, 3];
    const sum = reduce(arr, (sum, n) => sum + n, 0);
    expect(sum).toBe(6);
  });
  test("should also work on objects", () => {
    const arr = [{ sum: 1 }, { sum: 2 }, { sum: 3 }];
    const sum = reduce(arr, (sum, n) => sum + n.sum, 0);
    expect(sum).toBe(6);
  });
  test("should return value of the accumulator when no elements", () => {
    const arr = [];
    const sum = reduce(arr, (sum, n) => sum + n, 100);
    expect(sum).toBe(100);
  });
});
