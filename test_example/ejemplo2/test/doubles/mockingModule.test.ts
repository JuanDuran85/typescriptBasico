import * as otherUtilsFile from "../../app/doubles/otherUtils";

jest.mock("../../app/doubles/otherUtils", () => ({
  ...jest.requireActual("../../app/doubles/otherUtils"), //to keep the functionality of all the other functions in this module.
  calculateComplexity: () => {
    return 20;
  },
}));

jest.mock("uuid", () => ({
  v4: () => {
    return "229e8eb9-8564-4137-ac0a-3281fb83f8a5";
  },
}));

describe("Working with Mock Modules", () => {
  it("Mocking calculateComplexity", () => {
    const result = otherUtilsFile.calculateComplexity({} as any);
    console.debug(result);
    expect(result).toStrictEqual(20);
  });

  it("Mocking calculateComplexity", () => {
    const result = otherUtilsFile.toUpperCase("javaScript");
    console.debug(result);
    expect(result).toEqual("JAVASCRIPT");
  });

  it("Mocking toLowerCaseId with uuid module", () => {
    const result = otherUtilsFile.toLowerCaseId("JAVASCRIPT");
    console.debug(result);
    expect(result).toEqual("javascript-229e8eb9-8564-4137-ac0a-3281fb83f8a5");
  });
});
