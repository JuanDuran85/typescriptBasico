import { dumpToUperCase } from "../src/Utils";

describe("Dump Utils test suite", () => {
  test("should return upperCase", () => {
    const result = dumpToUperCase("abcdef");
    expect(result).toBe("ABCDEF");
  });
});
