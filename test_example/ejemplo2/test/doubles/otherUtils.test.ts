import {
  calculateComplexity,
  StringInfo,
  toUpperCaseWithCallBack,
} from "../../app/doubles/otherUtils";
describe("OtherUtils test suits", () => {
  it("calculateComplexity test", () => {
    // stubs: incomplet object wwe use on test
    const someInfo = {
      lengthTotal: 3,
      extraInfo: {
        fieldOne: "field",
        fieldTwo: "field",
        fieldThree: "field",
      },
    } as unknown as StringInfo;

    const actual = calculateComplexity(someInfo);
    expect(actual).toEqual(9);
  });

  it("ToUpperCase - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCallBack("", () => {});
    expect(actual).toBeUndefined();
  });

  it("ToUpperCase - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCallBack("abcDEF", () => {});
    expect(actual).toEqual("ABCDEF");
  });
});

describe("OtherUtils test suits - Tracking callback - Manual Mock", () => {
  let callBackArgs: string[] = [];
  let timesCallBack: number = 0;

  afterEach(() => {
    callBackArgs = [];
    timesCallBack = 0;
  });

  // creating a maual mock
  function callBackMockManual(params: string) {
    callBackArgs.push(params);
    timesCallBack++;
  }

  it("ToUpperCase - calls callback for invalid argument - track call", () => {
    const actual = toUpperCaseWithCallBack("", callBackMockManual);
    expect(actual).toBeUndefined();
    expect(timesCallBack).toBe(1);
    expect(callBackArgs).toContain("invalid argument!!!");
  });

  it("ToUpperCase - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCallBack("abcDEF", callBackMockManual);
    expect(actual).toEqual("ABCDEF");
    expect(timesCallBack).toBe(1);
    expect(callBackArgs).toContain(`Called function with: abcDEF`);
  });
});

describe("OtherUtils test suits - Tracking callback - Jest Mock", () => {
  const callBackJestMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("ToUpperCase - calls callback for invalid argument - track call", () => {
    const actual = toUpperCaseWithCallBack("", callBackJestMock);
    expect(actual).toBeUndefined();
    expect(callBackJestMock).toBeCalledWith("invalid argument!!!");
    expect(callBackJestMock).toBeCalledTimes(1);
  });

  it("ToUpperCase - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCallBack("abcDEF", callBackJestMock);
    expect(actual).toEqual("ABCDEF");
    expect(callBackJestMock).toBeCalledWith("Called function with: abcDEF");
    expect(callBackJestMock).toBeCalledTimes(1);
  });
});
