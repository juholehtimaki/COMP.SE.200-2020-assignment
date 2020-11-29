import words from "../../src/words";

describe("words.js tests", () => {
  test("should return an array containing the words of a string", () => {
    const result = words("test&more&words");
    expect(result).toEqual(["test", "more", "words"]);
  });
  test("should return an array containing the words of a string that match the pattern", () => {
    const result = words("test, more, words", /[^, ]+/g);
    expect(result).toEqual(["test", "more", "words"]);
  });
});
