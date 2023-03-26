import { dumpToUperCase } from "../src/Utils";

//--------------------------------------------
/*   
    Structure of a property written unit test
  AAA principles:
   - arrange
   - act
   - assert
*/
//--------------------------------------------

describe("Dump Utils test suite", () => {
  it("should return upperCase of valid string", () => {
    // arrange

    // create a System Under Test
    const sut: (args: string) => string = dumpToUperCase;
    const expected: string = "ABCDEF";

    // act
    const actual: string = sut("abcdef");

    // assert
    expect(actual).toBe(expected);
  });
});
