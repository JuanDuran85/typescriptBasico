//import { LocalLogger } from "./adapter-files/local-logger.ts";
import { DenoLoggerAdapter } from "./adapter-files/logger-adapter.ts";

// const logger: LocalLogger = new LocalLogger("01-adapter.ts");
// logger.writeLog("This is a normal log message");
// logger.writeError("This is an error message");
// logger.writeWarning("This is a warning message");

const logger = new DenoLoggerAdapter("01-adapter.ts");
logger.writeLog("This is a normal log message");
logger.writeError("This is an error message");
logger.writeWarning("This is a warning message");