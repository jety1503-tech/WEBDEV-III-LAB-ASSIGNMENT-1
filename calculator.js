/**
 * calculator.js
 * A simple CLI-based calculator using process.argv
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 10 5
 *   node calculator.js sub 10 5
 *   node calculator.js mul 10 5
 *   node calculator.js div 10 5
 */

// process.argv structure:
// [0] -> path to node executable
// [1] -> path to this script
// [2] -> operation
// [3] -> first number
// [4] -> second number

const args = process.argv.slice(2);
const [operation, a, b] = args;

function calculate(op, x, y) {
  switch (op) {
    case "add":
      return x + y;
    case "sub":
      return x - y;
    case "mul":
      return x * y;
    case "div":
      if (y === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return x / y;
    default:
      throw new Error(`Invalid operation: "${op}". Use add, sub, mul, or div.`);
  }
}

function main() {
  if (!operation || a === undefined || b === undefined) {
    console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
    console.log("Example: node calculator.js add 10 5");
    process.exit(1);
  }

  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(operation, num1, num2);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
