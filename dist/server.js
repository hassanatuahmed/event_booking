"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const kcors_1 = __importDefault(require("kcors"));
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const logger_1 = require("./logger");
const serverPort = 9090;
const requestTimeoutMs = 60000;
const jsonLimit = "25mb";
function setName(name) { }
const startServer = async () => {
    const app = new koa_1.default();
    app.use((0, kcors_1.default)({
        origin: "*",
        exposeHeaders: ["Content-Disposition"],
    }));
    app.use((0, koa_bodyparser_1.default)({ jsonLimit }));
    app.use((ctx, next) => {
        console.log("context>>>", ctx);
        next();
    });
    const router = new koa_router_1.default();
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
    logger_1.logger.debug(`server listening on PORT: ${serverPort}, for routes:`);
};
exports.startServer = startServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsOENBQXNCO0FBQ3RCLDREQUFnQztBQUNoQyxvRUFBMkM7QUFDM0MscUNBQWtDO0FBRWxDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUMvQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFFekIsU0FBUyxPQUFPLENBQUMsSUFBWSxJQUFHLENBQUM7QUFFMUIsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztJQUN0QixHQUFHLENBQUMsR0FBRyxDQUNMLElBQUEsZUFBSSxFQUFDO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxhQUFhLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUN2QyxDQUFDLENBQ0gsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSx3QkFBYSxFQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQU0sRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUUsVUFBVTtTQUNsQixDQUFDO1FBRUYsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDVCxJQUFJLEVBQUUsZUFBZTtZQUNyQixHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO1FBQ0YsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDVCxHQUFHLEVBQUUsV0FBVztTQUNqQixDQUFDO1FBQ0YsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFekIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO0lBRWxDLGVBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLFVBQVUsZUFBZSxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDO0FBN0NXLFFBQUEsV0FBVyxlQTZDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ycyBmcm9tIFwia2NvcnNcIjtcclxuaW1wb3J0IEtvYSBmcm9tIFwia29hXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcImtvYS1yb3V0ZXJcIjtcclxuaW1wb3J0IGtvYUJvZHlQYXJzZXIgZnJvbSBcImtvYS1ib2R5cGFyc2VyXCI7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5cclxuY29uc3Qgc2VydmVyUG9ydCA9IDkwOTA7XHJcbmNvbnN0IHJlcXVlc3RUaW1lb3V0TXMgPSA2MDAwMDtcclxuY29uc3QganNvbkxpbWl0ID0gXCIyNW1iXCI7XHJcblxyXG5mdW5jdGlvbiBzZXROYW1lKG5hbWU6IHN0cmluZykge31cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFydFNlcnZlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcHAgPSBuZXcgS29hKCk7XHJcbiAgYXBwLnVzZShcclxuICAgIGNvcnMoe1xyXG4gICAgICBvcmlnaW46IFwiKlwiLFxyXG4gICAgICBleHBvc2VIZWFkZXJzOiBbXCJDb250ZW50LURpc3Bvc2l0aW9uXCJdLFxyXG4gICAgfSlcclxuICApO1xyXG4gIGFwcC51c2Uoa29hQm9keVBhcnNlcih7IGpzb25MaW1pdCB9KSk7XHJcbiAgYXBwLnVzZSgoY3R4LCBuZXh0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbnRleHQ+Pj5cIiwgY3R4KTtcclxuICAgIG5leHQoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxuICByb3V0ZXIuZ2V0KFwiL1wiLCAoY3R4LCBuZXh0KSA9PiB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgaGVsbG86IFwiV29ybGQhISFcIixcclxuICAgIH07XHJcblxyXG4gICAgbmV4dCgpO1xyXG4gIH0pO1xyXG4gIHJvdXRlci5nZXQoXCIvdXNlclwiLCAoY3R4LCBuZXh0KSA9PiB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgbmFtZTogXCJIYXNzYW5hIEFobWVkXCIsXHJcbiAgICAgIGFnZTogMzAsXHJcbiAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgIH07XHJcbiAgICBuZXh0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHJvdXRlci5nZXQoXCIvdGVzdFwiLCAoY3R4LCBuZXh0KSA9PiB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgaGFzOiBcIkJhbGEgQmFsYVwiLFxyXG4gICAgfTtcclxuICAgIG5leHQoKTtcclxuICB9KTtcclxuICBhcHAudXNlKHJvdXRlci5yb3V0ZXMoKSk7XHJcblxyXG4gIGNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4oc2VydmVyUG9ydCk7XHJcbiAgc2VydmVyLnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dE1zO1xyXG5cclxuICBsb2dnZXIuZGVidWcoYHNlcnZlciBsaXN0ZW5pbmcgb24gUE9SVDogJHtzZXJ2ZXJQb3J0fSwgZm9yIHJvdXRlczpgKTtcclxufTtcclxuIl19