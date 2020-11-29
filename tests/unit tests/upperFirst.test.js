import upperFirst from "../../src/upperFirst";

describe("upperFirst.js tests", () => {
  test("should capitalize the first letter if it's in lower-case", () => {
    const upperFirstWord = upperFirst("test");
    expect(upperFirstWord).toBe("Test");
  });
  test("should not do anything if the first letter is already in upper-case", () => {
    const alreadyUpperFirstWord = upperFirst("Test");
    expect(alreadyUpperFirstWord).toBe("Test");
  });
});
