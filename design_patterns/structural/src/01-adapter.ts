import { LocalLogger } from "./adapter-files/local-logger.ts";

const logger: LocalLogger = new LocalLogger("01-adapter.ts");

logger.writeLog("This is a normal log message");
logger.writeError("This is an error message");
logger.writeWarning("This is a warning message");