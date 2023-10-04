import { logger } from "./logger";
import { startServer } from "./server";

startServer().catch((err) => {
  logger.error("Error starting server", err);
});
