/**
 * modules/logger.js
 * A reusable logger module with timestamped, colored output.
 * Demonstrates module.exports with multiple functions (an object export).
 */

// ANSI escape codes for colored terminal output (Bonus Challenge)
const COLORS = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function timestamp() {
  return new Date().toISOString();
}

function info(message) {
  console.log(`${COLORS.cyan}[INFO] ${timestamp()} - ${message}${COLORS.reset}`);
}

function success(message) {
  console.log(`${COLORS.green}[SUCCESS] ${timestamp()} - ${message}${COLORS.reset}`);
}

function warn(message) {
  console.log(`${COLORS.yellow}[WARN] ${timestamp()} - ${message}${COLORS.reset}`);
}

function error(message) {
  console.log(`${COLORS.red}[ERROR] ${timestamp()} - ${message}${COLORS.reset}`);
}

module.exports = { info, success, warn, error };
