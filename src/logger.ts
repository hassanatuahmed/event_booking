//@ts-ignore
import * as winston from "winston";
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

export const logger = new winston.Logger({
  exitOnError: false,
  transports,
});

export const loggerStream = {
  write: logger.info,
};
