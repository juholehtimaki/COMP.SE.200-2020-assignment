import drop from "../../src/drop.js";

describe("drop.js tests", () => {
  it("should drop first indices from array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expectedArr = [4, 5, 6];
    const droppedArr = drop(arr, 3);
    expect(droppedArr).toStrictEqual(expectedArr);
  });
});
