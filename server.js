/**
 * server.js
 * A basic HTTP server built with the core "http" module (no Express).
 * Demonstrates routing and different responses per URL.
 *
 * Usage:
 *   node server.js
 *   Then visit:
 *     http://localhost:3000/
 *     http://localhost:3000/about
 *     http://localhost:3000/contact
 *     http://localhost:3000/anything-else  -> 404
 */

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const routes = {
  "/": {
    statusCode: 200,
    message: "Welcome to the Smart Utility Toolkit Node Server!",
  },
  "/about": {
    statusCode: 200,
    message: "About Page",
  },
  "/contact": {
    statusCode: 200,
    message: "Contact Page",
  },
};

const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  const route = routes[req.url];

  res.setHeader("Content-Type", "text/plain");

  if (route) {
    res.statusCode = route.statusCode;
    res.end(route.message);
    logger.success(`Responded ${route.statusCode} for ${req.url}`);
  } else {
    res.statusCode = 404;
    res.end("404 Error: Route Not Found");
    logger.warn(`Responded 404 for unknown route ${req.url}`);
  }
});

server.listen(PORT, () => {
  logger.success(`Server running at http://localhost:${PORT}/`);
});
