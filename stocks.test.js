const { binarySearch, binaryInsert, bestPrice } = require("./stocks");

describe("Tests for binarySearch", () => {
  test("Has a function called binarySearch", () => {
    expect(binarySearch).toBeDefined();
  });
  test("Has a function called binarySearch that can find where a value is in a list", () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toEqual(2);
  });
  test("Has a function called binarySearch that can find where a value should be in a list", () => {
    expect(binarySearch([1, 2, 4], 3)).toEqual(2);
  });
});

describe("Tests for binaryInsert", () => {
  test("Has a function called binarySearch", () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toBeDefined();
  });
  test("Has a function called binaryInsert that can place a value in an ordered list", () => {
    expect(binaryInsert([1, 2, 3, 4, 6, 7, 8], 5)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });
});
