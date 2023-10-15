"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const server_1 = require("./server");
(0, server_1.startServer)().catch((err) => {
    logger_1.logger.error("Error starting server", err);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUNsQyxxQ0FBdUM7QUFFdkMsSUFBQSxvQkFBVyxHQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDMUIsZUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBzdGFydFNlcnZlciB9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5cclxuc3RhcnRTZXJ2ZXIoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgbG9nZ2VyLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgc2VydmVyXCIsIGVycik7XHJcbn0pO1xyXG4iXX0=