import isArguments from "../../src/isArguments";

describe("isArguments.js tests", () => {
  test("should return true if passed value is an arugments objects", () => {
    expect(
      isArguments(
        (function () {
          return arguments;
        })()
      )
    ).toBe(true);
  });
  test("should return false if passed value is not an arugments objects", () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });
});

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
