import { numberOfItems } from "../src/ejemplo4";

let sut: (s: string, startIndices: number[], endIndices: number[]) => number[];

describe("Ejemplo4 unit test suit", () => {
  beforeEach(() => {
    sut = numberOfItems;
  });
  it("should throw an error when the items are different to * of |", () => {
    const sItems: string = "*|2|*";
    const startIndices: number[] = [1];
    const endIndices: number[] = [2];
    const actual: () => number[] = () => sut(sItems, startIndices, endIndices);
    expect(actual).toThrow();
  });
});
