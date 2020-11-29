import memoize from "../../src/memoize";

const object = { a: 1, b: 2 };

describe("memoize.js tests", () => {
  test("should memoize the result of a function", () => {
    const values = (object) => Object.values(object);
    const memoizedFn = memoize(values);
    expect(memoizedFn(object)).toEqual([1, 2]);
  });
  test("should let us modify the cached result", () => {
    const values = (object) => Object.values(object);
    const memoizedFn = memoize(values);
    memoizedFn.cache.set(object, "test");
    expect(memoizedFn(object)).toEqual("test");
  });
});
