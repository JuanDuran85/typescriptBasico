import { processLogsX } from "../src/ejemplo";



describe('processLogs', () => {
    // Valid logs and threshold
    it('should throw an error when the threshold is a valid positive integer', () => {
      const logs = ["23 34 546"]; // valid logs
      const threshold = 10; // valid positive integer

      expect(processLogsX(logs, threshold)).toBeNull();
    });
});