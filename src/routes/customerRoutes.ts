import Router from "koa-router";

const userRoutes = new Router({
  prefix: "/customers",
});
userRoutes.get("/");
