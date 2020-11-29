import every from "../../src/every";

describe("every.js tests", () => {
  test("should return true if the predicate returns truthy for all the elements in the array", () => {
    const arr = [3, 3, 3, 3];
    const result = every(arr, (number) => number === 3);
    expect(result).toBe(true);
  });
  test("should return false if the predicate does not return truthy for all the elements in the array", () => {
    const arr = [3, 3, 3, 5];
    const result = every(arr, (number) => number === 3);
    expect(result).toBe(false);
  });
  test("should return true if array has no elements", () => {
    const arr = [];
    const result = every(arr, (number) => number === 3);
    expect(result).toBe(true);
  });
});
