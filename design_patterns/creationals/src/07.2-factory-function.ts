import { COLORS } from "./helpers/colors.ts";

function formatDate(date: Date): string {
  const year: number = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, "0");
  const day: string = String(date.getDate()).padStart(2, "0");
  const hours: string = String(date.getHours()).padStart(2, "0");
  const minutes: string = String(date.getMinutes()).padStart(2, "0");
  const seconds: string = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

type LogLevel = "info" | "warning" | "error";

function createLogger(level: LogLevel): (message: string) => void {
  return (message: string): void => {
    const colorLevel: Record<LogLevel, string> = {
      info: COLORS.blue,
      warning: COLORS.yellow,
      error: COLORS.red,
    };

    console.log(
      `%c[${level.toUpperCase()}:${formatDate(new Date())}] ${message}`,
      colorLevel[level]
    );
  };
}

function main() {
  const infoLogger: (message: string) => void = createLogger("info");
  const warningLogger: (message: string) => void = createLogger("warning");
  const errorLogger: (message: string) => void = createLogger("error");

  infoLogger("Application has started");
  warningLogger("Memory usage is high");
  errorLogger("Database connection error");
}

main();
