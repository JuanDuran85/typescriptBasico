import { COLORS } from "../helpers/colors.ts";

export class LocalLogger {
  public constructor(private fileName: string) {}

  public writeLog(message: string): void {
    console.debug(`[${this.fileName} LOG]: %c${message}`, COLORS.green);
  }
  public writeError(message: string): void {
    console.debug(`[${this.fileName} ERROR]: %c${message}`, COLORS.red);
  }
  public writeWarning(message: string): void {
    console.debug(`[${this.fileName} WARNING]: %c${message}`, COLORS.yellow);
  }
}
