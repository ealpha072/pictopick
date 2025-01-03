import logger from "./logger.js";

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:", req.path);
  logger.info("Body:", req.body);
  logger.info("-------------");

  next();
};

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  next(error);
};

const faviconIgnore = (request, response, next) => {
  if (request.originalUrl.includes("/favicon.ico")) {
    return response.status(204).end();
  }
  next();
};

const unknownEndpoints = (request, response) => {
  response.status(400).sen({ error: "Unknown Endpoint" });
};

export default { requestLogger, unknownEndpoints, errorHandler, faviconIgnore };
