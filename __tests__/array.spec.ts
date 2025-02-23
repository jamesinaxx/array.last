import last from "../src/index";

describe("Array.last", () => {
  it("should return the last element of an array", () => {
    const array = [1, 2, 3];
    expect(array.last).toBe(3);
  });
});

describe("imported last function", () => {
  it("should return the last element of an array", () => {
    const array = [1, 2, 3];
    expect(last(array)).toBe(3);
  });
});
