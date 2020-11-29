import compact from "../../src/compact";

describe("compact.js tests", () => {
  test("should remove false from the array", () => {
    expect(compact([1, 2, false])).toEqual([1, 2]);
  });
  test("should remove null from the array", () => {
    expect(compact([1, 2, null])).toEqual([1, 2]);
  });
  test("should remove 0 from the array", () => {
    expect(compact([1, 2, 0])).toEqual([1, 2]);
  });
  test("should remove empty string from the array", () => {
    expect(compact([1, 2, ""])).toEqual([1, 2]);
  });
  test("should remove undefined from the array", () => {
    expect(compact([1, 2, undefined])).toEqual([1, 2]);
  });
  test("should remove NaN from the array", () => {
    expect(compact([1, 2, NaN])).toEqual([1, 2]);
  });
});
