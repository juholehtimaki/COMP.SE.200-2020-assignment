import keys from "../../src/keys.js";

describe("keys.js tests", () => {
  it("Should create an array of the own enumerable property names of object", () => {
    const testObject = { a: 12, b: 13 };
    const expectedArray = ["a", "b"];
    expect(keys(testObject)).toStrictEqual(expectedArray);
  });

  it("Should return empty array when object is empty", () => {
    expect(keys({})).toStrictEqual([]);
  });
});
