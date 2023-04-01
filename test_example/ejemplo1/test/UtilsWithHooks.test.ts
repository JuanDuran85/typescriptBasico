import { StringToUpperCaseDump } from "../src/Utils";

describe("Util test suite with jest hooks - String util test - StringToUpperCaseDump", () => {
  let sut: StringToUpperCaseDump;

  beforeEach(() => {
    sut = new StringToUpperCaseDump();
    console.log("SETUP");
  });

  afterEach(() => {
    //clearing mocks
    console.log("Teardown");
  });
  it("Should return correct uppercase", () => {
    // arrange
    const expected: string = "ABCDEF";
    // act
    const actual: string = sut.callingDumpToUperCaseFunction("abcdef");

    // assert
    expect(actual).toBe(expected);
    console.log('Actual test');
  });
});
