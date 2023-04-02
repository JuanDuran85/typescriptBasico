import { dumpToUperCase, dumpGetStringInfo, stringInfo } from "../src/Utils";

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

  it("should be return info for a valid string", () => {
    // arrange
    const sut: (args: string) => stringInfo = dumpGetStringInfo;
    const expected: stringInfo = {
      lowerCase: "my-super-string",
      upperCase: "MY-SUPER-STRING",
      characters: [""],
      lengthTotal: 12,
      extraInfo: {},
    };
    // act
    const actual: stringInfo = sut("Super-String");

    // assert
    expect(actual.characters).toHaveLength(expected.lengthTotal);
    expect(actual.extraInfo).toEqual({});
    expect(actual.characters).toContain<string>("u");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "u", "p", "e", "r"])
    );
  });
});

// Parametrized test
describe("Dump Utils test suitE 2", () => {
  describe("ToUpperCase cases examples", () => {
    it.each([
      { input: "test", expected: "TEST" },
      { input: "unit", expected: "UNIT" },
      { input: "typescript", expected: "TYPESCRIPT" },
    ])(
      "$input -> through dumpToUperCase should return upperCase value: $expected",
      ({ input, expected }) => {
        // arrange
        const sut: (args: string) => string = dumpToUperCase;

        // act
        const actual: string = sut(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });
});
