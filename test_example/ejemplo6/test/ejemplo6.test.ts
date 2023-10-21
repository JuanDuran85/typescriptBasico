import { maximumBookCopies } from "../src/ejemplo6";

let sut: (arr: number[]) => void;

describe("Ejemplo5 unit test suit - plusMinus", () => {
  beforeEach(() => {
    sut = maximumBookCopies;
  });
  it("should throw an error when the function parameter are not an array", () => {
    const actual = sut([6, 6, 2, -6, -2, -6]);
    expect(actual).toBe([1,1,1]);
  });
});
