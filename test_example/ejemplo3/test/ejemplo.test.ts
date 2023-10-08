import { processLogsX } from "../src/ejemplo";

describe("processLogs", () => {
  // Valid logs and threshold
  it("should throw an error when the threshold is a valid positive integer", () => {
    const logs = ["1 2 50","1 7 70", "1 3 20", "2 2 17"]; // valid logs
    const threshold = 2; // valid positive integer

    expect(processLogsX(logs, threshold)).toStrictEqual(["1","2"]);
  });

  // Should return an array of string ids when given an array of valid logs and a valid positive integer threshold
  it("should return an empty array when the max number of transactions is smaller than threshold", () => {
    const logs = ["23 34 546", "45 67 890"]; // valid logs
    const threshold = 3; // valid positive integer

    expect(processLogsX(logs, threshold)).toEqual([]);
  });

  // Should return an empty array when given an array of valid logs and a threshold that is greater than the number of logs
  it("should return an empty array when given an array of valid logs and a threshold that is greater than the number of logs", () => {
    const logs = ["23 34 546", "45 67 890"]; // valid logs
    const threshold = 3; // greater than the number of logs

    expect(processLogsX(logs, threshold)).toEqual([]);
  });

  // Should return an empty array when given an empty array of logs and any threshold
  it("should return an empty array when given an empty array of logs and any threshold", () => {
    const logs = []; // empty array of logs
    const threshold = 10; // any threshold

    expect(processLogsX(logs, threshold)).toEqual([]);
  });

  // Should throw an error when given a threshold that is not a positive integer
  it("should throw an error when given a threshold that is not a positive integer", () => {
    const logs = ["23 34 546"]; // valid logs
    const threshold = -5; // not a positive integer

    expect(() => processLogsX(logs, threshold)).toThrow();
  });

  // Should throw an error when given an invalid log (missing sender_user_id, recipient_user_id, or amount_of_transactions)
  it("should throw an error when given an invalid log (missing sender_user_id, recipient_user_id, or amount_of_transactions)", () => {
    const logs = ["23 34", "45 67 890"]; // invalid logs
    const threshold = 2; // valid positive integer

    expect(() => processLogsX(logs, threshold)).toThrow();
  });

  // Should return an empty array when given an array of logs with only one transaction and a threshold of 2
  it("should return an empty array when given an array of logs with only one transaction and a threshold of 2", () => {
    const logs = ["23 34 546"]; // valid logs
    const threshold = 2; // valid positive integer

    expect(processLogsX(logs, threshold)).toEqual([]);
  });
});
