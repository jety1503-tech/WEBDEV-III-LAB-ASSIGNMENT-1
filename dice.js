/**
 * dice.js
 * A random dice generator using the core "crypto" module for
 * cryptographically secure randomness (instead of Math.random()).
 *
 * Usage:
 *   node dice.js            -> rolls the dice once
 *   node dice.js 5          -> rolls the dice 5 times
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const historyPath = path.join(__dirname, "dice-history.txt");

function rollDice() {
  // crypto.randomInt(min, max) -> min inclusive, max exclusive
  return crypto.randomInt(1, 7); // generates a number between 1 and 6
}

function logRollToHistory(value) {
  const entry = `${new Date().toISOString()} - Dice Rolled: ${value}\n`;
  fs.appendFile(historyPath, entry, (err) => {
    if (err) {
      logger.error(`Could not write to dice history: ${err.message}`);
    }
  });
}

function main() {
  const rolls = Number(process.argv[2]) || 1;

  logger.info(`Rolling dice ${rolls} time(s)...`);

  for (let i = 1; i <= rolls; i++) {
    const value = rollDice();
    console.log(`Roll ${i}: Dice Rolled: ${value}`);
    logRollToHistory(value);
  }

  logger.success(`Done. Roll history saved to ${historyPath}`);
}

main();
