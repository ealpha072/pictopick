import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import cors from "cors";
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";
import appRoute from "./routes/routes.js";

const app = express();
const PORT = config.PORT;
const URL = config.url;
logger.info(`Attempting connection to: ${URL}`);

mongoose.set("strictQuery", true);
mongoose
  .connect(URL)
  .then(() => {
    logger.info(`Connected to database`);
    app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/app", appRoute);
app.use(middleware.faviconIgnore);
app.use(middleware.unknownEndpoints);
app.use(middleware.errorHandler);
