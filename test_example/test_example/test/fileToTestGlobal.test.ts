import { ExampleClassToDecored } from "../src/fileToTestGlobal";

let sut: ExampleClassToDecored;

describe("Ejemplo5 unit test suit - plusMinus", () => {
  beforeEach(() => {
  });
  it("should throw an error when the function parameter are not an array", () => {
    sut = new ExampleClassToDecored("Juan", "Juanito");;
    expect(sut).toBe([1, 1, 1]);
  });
});
