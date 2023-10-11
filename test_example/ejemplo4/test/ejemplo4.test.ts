import { numberOfItems } from "../src/ejemplo4";

let sut: (s: string, startIndices: number[], endIndices: number[]) => number | number[];

describe("Ejemplo4 unit test suit", () => {
  beforeEach(() => {
    sut = numberOfItems;
  });
  it("should throw an error when the items are different to * of |", () => {
    const sItems: string = "*|2|*";
    const startIndices: number[] = [1];
    const endIndices: number[] = [2];
    const actual: () => number | number[] = () => sut(sItems, startIndices, endIndices);
    expect(actual).toThrow();
  });

  it("should throw an error when the startIndices are greater than the endIndices", () => {
    const sItems: string = "*|**|*";
    const startIndices: number[] = [2];
    const endIndices: number[] = [1];
    const actual: () => number | number[] = () => sut(sItems, startIndices, endIndices);
    expect(actual).toThrow();
  });

  it("should throw an error when the startIndices are not init with 1", () => {
    const sItems: string = "*|**|*";
    const startIndices: number[] = [0];
    const endIndices: number[] = [1];
    const actual: () => number | number[] = () => sut(sItems, startIndices, endIndices);
    expect(actual).toThrow();
  })

  it('should return an array of numbers', () => {
    const sItems: string = "***|*|**|";
    const startIndices: number[] = [1];
    const endIndices: number[] = [9];
    const actual: number | number[] = sut(sItems, startIndices, endIndices);
    expect(actual).toEqual(3);  
  });

  it('should return an cero when the items are not |', () => {
    const sItems: string = "****";
    const startIndices: number[] = [1];
    const endIndices: number[] = [3];
    const actual: number | number[] = sut(sItems, startIndices, endIndices);
    expect(actual).toEqual(0);  
  });
});
