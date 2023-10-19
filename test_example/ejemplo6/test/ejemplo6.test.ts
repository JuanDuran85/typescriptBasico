import { miniMaxSum } from "../src/ejemplo6";

let sut: (arr: number[]) => void;

describe("Ejemplo5 unit test suit - plusMinus", () => {
  beforeEach(() => {
    sut = miniMaxSum;
  });
  it("should throw an error when the function parameter are not an array", () => {
    const arrIn = "string";
    const actual: () => void = () =>
      //@ts-ignore
      sut(arrIn);
    expect(actual).toThrow();
  });
});
