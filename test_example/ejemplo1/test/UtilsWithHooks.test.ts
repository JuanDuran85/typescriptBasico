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
    console.log("Actual test");
  });

  // testing error with a simple function
  it("Should throw an error for invalid string - using simple function", () => {
    // arrange

    // act
    function functionToUpperCase(): void {
      sut.callingDumpToUperCaseFunction("");
    }

    // assert
    expect(functionToUpperCase).toThrow();
    expect(functionToUpperCase).toThrowError(
      "Invalid string - no args provided"
    );
  });

  // testing error with an arrow function
  it("Should throw an error for invalid string - using arrow funtion", () => {
    // arrange
    // act
    // assert
    expect(() => {
      sut.callingDumpToUperCaseFunction("");
    }).toThrowError("Invalid string - no args provided");
  });

  // testinng error with try/catch block
  it("Should throw an error for invalid string - using try/catch block", (done) => {
    // arrange
    // act
    // assert
    try {
      sut.callingDumpToUperCaseFunction(""); // be carefull, becouse if the function not throw an error, the test pass. For this reason, you should use the done() function
      done("Error here: callingDumpToUperCaseFunction");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty(
        "message",
        "Invalid string - no args provided"
      );
      done();
    }
  });

  it.todo('For to do!!');
  it.skip('Skipping the test...',() => {
    expect(1).toEqual(1);
  });

  xit('Skipping the test with xit aliases...',() => {
    expect(1).toEqual(1);
  });

});
