import { processLogsX } from "../src/ejemplo";

let sut: (logs: string[], threshold: number) => any[];
describe("processLogs", () => {
  beforeEach(() => {
    sut = processLogsX;
  });

  it("should return an array when given an array of valid logs and a threshold", () => {
    const logs: string[] = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"]; // valid logs
    const threshold: number = 2; // valid positive integer
    const actual: any[] = sut(logs, threshold);
    expect(actual).toStrictEqual(["1", "2"]);
  });

  it("should return an empty array when the max number of transactions is smaller than threshold", () => {
    const logs: string[] = ["23 34 546", "45 67 890"]; // valid logs
    const threshold: number = 3; // valid positive integer
    const actual: any[] = sut(logs, threshold);
    expect(actual).toEqual([]);
  });

  it("should return an valid array", () => {
    const logs: string[] = ["34 23 546", "34 23 890", "34 23 324", "34 23 865"]; // valid logs
    const threshold: number = 3; // greater than the number of logs
    const actual: any[] = sut(logs, threshold);
    expect(actual).toEqual(["23", "34"]);
  });

  it("should throw an error", () => {
    const logs = []; // empty array of logs
    const threshold = 10; // any threshold
    const actual = () => sut(logs, threshold);
    expect(actual).toThrow();
  });

  it("should throw an error when threshold is negative", () => {
    const logs = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"]; // valid logs
    const threshold = -10; // negative threshold
    const actual = () => sut(logs, threshold);
    expect(actual).toThrow();
  });

  it('should throw an error when one of the logs is invalid', () => {
    const logs = ["1 2 50", "1 7 70", "01 3 20", "2 2 17"]; // invalid logs
    const threshold = 2; // valid positive integer
    const actual = () => sut(logs, threshold);
    expect(actual).toThrow();
  });

  it('should throw an error when one of the logs contains letters', () => {
    const logs = ["1 2 50", "1 7 70", "1 A 20", "2 B 17"]; // invalid logs
    const threshold = 2; // valid positive integer
    const actual = () => sut(logs, threshold);
    expect(actual).toThrow();
  });

  it('should throw an error when one of the logs is empty', () => {
    const logs = ["2 4 56","","5 6 342"]; // invalid logs
    const threshold = 2; // valid positive integer
    const actual = () => sut(logs, threshold);
    expect(actual).toThrow();
  });

  it('should count only like one when one of IDs is repeated inside the logs', () => {
    const logs = ["1 2 50", "7 7 70", "1 3 20", "2 2 17"]; // valid logs
    const threshold = 2; // valid positive integer
    const actual = sut(logs, threshold);
    expect(actual).toEqual(["1", "2"]);
  });
});
