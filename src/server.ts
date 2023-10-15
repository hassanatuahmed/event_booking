import cors from "kcors";
import Koa from "koa";
import Router from "koa-router";
import koaBodyParser from "koa-bodyparser";
import { logger } from "./logger";

const serverPort = 9090;
const requestTimeoutMs = 60000;
const jsonLimit = "25mb";

function setName(name: string) {}

export const startServer = async () => {
  const app = new Koa();
  app.use(
    cors({
      origin: "*",
      exposeHeaders: ["Content-Disposition"],
    })
  );
  app.use(koaBodyParser({ jsonLimit }));
  app.use((ctx, next) => {
    console.log("context>>>", ctx);
    next();
  });

  const router = new Router();

  router.get("/", (ctx, next) => {
    ctx.body = {
      hello: "World!!!",
    };

    next();
  });
  router.get("/user", (ctx, next) => {
    ctx.body = {
      name: "Hassana Ahmed",
      age: 30,
      height: 50,
      color: "blue",
    };
    next();
  });

  router.get("/test", (ctx, next) => {
    ctx.body = {
      has: "Bala Bala",
    };
    next();
  });
  app.use(router.routes());

  const server = app.listen(serverPort);
  server.timeout = requestTimeoutMs;

  logger.debug(`server listening on PORT: ${serverPort}, for routes:`);
};
