import cors from "kcors";
import Koa from "koa";
import koaBodyParser from "koa-bodyparser";
import { logger } from "./logger";

const serverPort = 9090;
const requestTimeoutMs = 60000;
const jsonLimit = "25mb";

export const startServer = async () => {
  const app = new Koa();
  app.use(
    cors({
      origin: "*",
      exposeHeaders: ["Content-Disposition"],
    })
  );
  app.use(koaBodyParser({ jsonLimit }));
  const server = app.listen(serverPort);
  server.timeout = requestTimeoutMs;

  logger.debug(`server listening on PORT: ${serverPort}, for routes:`);
};
