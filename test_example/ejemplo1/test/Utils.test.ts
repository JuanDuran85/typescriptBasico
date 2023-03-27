import { dumpToUperCase, dumpGetStringInfo, stringInfo } from '../src/Utils';

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

  it('should be return info for a valid string', () => {
    // arrange
    const sut: (args: string) => stringInfo = dumpGetStringInfo;
    const expected: stringInfo = {
      lowerCase: '',
      upperCase: '',
      characters: [''],
      length: 1,
      extraInfo: {}
    } 
    // act
    const actual: stringInfo = sut("My-Super-String");


    // assert

  });
});
