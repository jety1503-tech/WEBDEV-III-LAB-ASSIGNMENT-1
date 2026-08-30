/**
 * app.js
 * Demonstrates reusing custom modules (isEven, logger) via require().
 *
 * Usage:
 *   node app.js
 */

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.info("Starting module reusability demo...");

const numbers = [3, 4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    logger.success(`${num} is even`);
  } else {
    logger.warn(`${num} is odd`);
  }
});

try {
  isEven("not-a-number");
} catch (err) {
  logger.error(`Caught expected error: ${err.message}`);
}

logger.info("Module reusability demo complete.");
