"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerStream = exports.logger = void 0;
//@ts-ignore
const winston = __importStar(require("winston"));
require("winston-loggly-bulk"); // tslint:disable-line
const level = "debug";
const consoleTransport = new winston.transports.Console({
    colorize: true,
    handleExceptions: true,
    json: false,
    level,
    timestamp: true,
});
const transports = [consoleTransport];
exports.logger = new winston.Logger({
    exitOnError: false,
    transports,
});
exports.loggerStream = {
    write: exports.logger.info,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFDWixpREFBbUM7QUFDbkMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFFdEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUN0RCxRQUFRLEVBQUUsSUFBSTtJQUNkLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLO0lBQ0wsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXpCLFFBQUEsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN2QyxXQUFXLEVBQUUsS0FBSztJQUNsQixVQUFVO0NBQ1gsQ0FBQyxDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQUc7SUFDMUIsS0FBSyxFQUFFLGNBQU0sQ0FBQyxJQUFJO0NBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tIFwid2luc3RvblwiO1xyXG5yZXF1aXJlKFwid2luc3Rvbi1sb2dnbHktYnVsa1wiKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5cclxuY29uc3QgbGV2ZWwgPSBcImRlYnVnXCI7XHJcbmNvbnN0IGNvbnNvbGVUcmFuc3BvcnQgPSBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xyXG4gIGNvbG9yaXplOiB0cnVlLFxyXG4gIGhhbmRsZUV4Y2VwdGlvbnM6IHRydWUsXHJcbiAganNvbjogZmFsc2UsXHJcbiAgbGV2ZWwsXHJcbiAgdGltZXN0YW1wOiB0cnVlLFxyXG59KTtcclxuXHJcbmNvbnN0IHRyYW5zcG9ydHMgPSBbY29uc29sZVRyYW5zcG9ydF07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gbmV3IHdpbnN0b24uTG9nZ2VyKHtcclxuICBleGl0T25FcnJvcjogZmFsc2UsXHJcbiAgdHJhbnNwb3J0cyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nZ2VyU3RyZWFtID0ge1xyXG4gIHdyaXRlOiBsb2dnZXIuaW5mbyxcclxufTtcclxuIl19