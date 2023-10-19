import { plusMinus } from "../src/ejemplo5";

let sut: (arr: number[]) => void;

describe("Ejemplo5 unit test suit - plusMinus", () => {
  beforeEach(() => {
    sut = plusMinus;
  });
  it("should throw an error when the function parameter are not an array", () => {
    const arrIn = "string";
    const actual: () => void = () =>
      //@ts-ignore
      sut(arrIn);
    expect(actual).toThrow();
  });

  it("should throw an error when the length of the array is more than 100", () => {
    const arrIn = [...Array(110).keys()];
    const actual: () => void = () => sut(arrIn);
    expect(actual).toThrow();
  });

  it("should throw an error when one of the elements of the array is out of range", () => {
    const arrIn = [1,100,0,-340,-2];
    const actual: () => void = () => sut(arrIn);
    expect(actual).toThrow();
  });

  it("should return an array of numbers", () => {
    const arrIn = [1, 10, 0, -3, -2];
    const actual: void = sut(arrIn);
    expect(actual).toBeUndefined();
  });

  // it("should return an cero when the items are not |", () => {
  //   const sItems: string = "****";
  //   const startIndices: number[] = [1];
  //   const endIndices: number[] = [3];
  //   const actual: number | number[] = sut(sItems, startIndices, endIndices);
  //   expect(actual).toEqual(0);
  // });
});
