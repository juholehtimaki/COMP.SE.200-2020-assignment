import get from "../../src/get";

const object = { a: [{ b: { c: 3 } }] };

describe("get.js tests", () => {
  test("should return the value at a specified path when it exists", () => {
    const testValue = get(object, "a[0].b.c");
    expect(testValue).toBe(3);
  });
  test("should also accept path to be specified in array format", () => {
    const testValue = get(object, ["a", "0", "b", "c"]);
    expect(testValue).toBe(3);
  });
  test("should return default value if no value was found at specified path", () => {
    const testValue = get(object, "a.b.c", "ourTestDefault");
    expect(testValue).toBe("ourTestDefault");
  });
});
