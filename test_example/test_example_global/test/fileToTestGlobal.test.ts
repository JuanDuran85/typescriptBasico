import { ClassDecoratorExampleOne } from "../src/fileToTestGlobal";

let sut: ClassDecoratorExampleOne;

describe("Ejemplo5 unit test suit - plusMinus", () => {
  beforeEach(() => {
  });
  it("should throw an error when the function parameter are not an array", () => {
    sut = new ClassDecoratorExampleOne('Title 1');
    expect(sut).toBe([1, 1, 1]);
  });
});
