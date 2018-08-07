"use strict";

const http = require("http");
const logger = require("logfmt");

http.globalAgent.maxSockets = Infinity;

const web = require("./web");

const PORT = process.env.PORT || 5000;

const __DEV__ = process.env.NODE_ENV === "development";

function start() {
  logger.log({ type: "info", message: "starting server" });

  let server;

  process.on("SIGTERM", exit);

  function listen() {
    const app = web(__DEV__);
    server = http.createServer(app);
    server.listen(PORT, err => {
      if (err) throw err;
      logger.log({
        type: "info",
        message: `running on port ${PORT} in ${process.env.NODE_ENV} mode`,
      });
    });
  }

  function exit(reason) {
    logger.log({ type: "info", message: "closing server", reason: reason });
    if (server) server.close(process.exit.bind(process));
    else process.exit();
  }

  listen();
}

start();
