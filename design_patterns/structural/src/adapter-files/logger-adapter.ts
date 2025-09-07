import { Logger } from "jsr:@deno-library/logger";

interface ILoggerAdapter {
  fileName: string;
  writeLog(message: string): void;
  writeError(message: string): void;
  writeWarning(message: string): void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public fileName: string;
  private logger = new Logger();

  public constructor(fileNameIn: string) {
    this.fileName = fileNameIn;
  }
  public writeLog(message: string): void {
    this.logger.info(`[${this.fileName} LOG]: ${message}`);
  }
  public writeError(message: string): void {
    this.logger.error(`[${this.fileName} ERROR]: ${message}`);
  }
  public writeWarning(message: string): void {
    this.logger.warn(`[${this.fileName} WARNING]: ${message}`);
  }
}
