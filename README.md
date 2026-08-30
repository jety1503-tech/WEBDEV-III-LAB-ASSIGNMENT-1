# Smart Utility Toolkit

Lab Assignment 1 — Web Dev III (Node.js & Express Backend), Unit 1.
Built entirely with **Node.js core modules** (`process`, `http`, `fs`, `crypto`) — no external packages, no Express, no database.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js        # CLI calculator (process.argv)
├── app.js                # Demonstrates custom module reuse
├── server.js              # HTTP server with routes
├── fileManager.js         # File CRUD using fs
├── dice.js                # Random dice generator using crypto
├── test.txt                # Created/updated/deleted by fileManager.js
├── dice-history.txt        # Bonus: dice roll history log
├── modules/
│   ├── isEven.js           # Custom module: checks even/odd
│   └── logger.js           # Custom module: timestamped, colored logs
└── README.md
```

## Requirements

- [Node.js](https://nodejs.org) installed (v14+ recommended; `crypto.randomInt` needs Node 14.10+).
- Check your version:
  ```bash
  node -v
  ```

## How to Run Each Part

Open a terminal, `cd` into the `smart-utility-toolkit` folder, then run the commands below.

### 1. CLI Calculator
```bash
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```
Invalid input (missing args, non-numbers, or bad division) is handled gracefully with a clear error message.

### 2. Custom Module Reuse (isEven + logger)
```bash
node app.js
```
This imports `modules/isEven.js` and `modules/logger.js` with `require()` and demonstrates both.

### 3. HTTP Server with Routes
```bash
node server.js
```
Then open a browser (or Postman) and visit:
- `http://localhost:3000/` → Welcome message
- `http://localhost:3000/about` → About page
- `http://localhost:3000/contact` → Contact page
- `http://localhost:3000/anything-else` → 404 Error message

Stop the server with `Ctrl + C`.

### 4. File Manager (CRUD with fs)
```bash
node fileManager.js
```
This will, in order: create `test.txt`, read it, append to it (update), read it again, then delete it — logging each step to the terminal.

### 5. Dice Generator (crypto)
```bash
node dice.js          # single roll
node dice.js 5        # roll 5 times
```
Each roll is a cryptographically random number from 1–6, and every roll is appended to `dice-history.txt` (bonus feature).

## Notes on Design

- **Modular programming**: `isEven.js` and `logger.js` live in `modules/` and are exported with `module.exports`, then reused across `app.js`, `server.js`, `fileManager.js`, and `dice.js` via `require()`.
- **Async vs sync**: `fileManager.js` uses the async (callback-based) versions of `fs` methods (`writeFile`, `readFile`, `appendFile`, `unlink`) chained in sequence, so you can observe non-blocking behavior and execution order in the console logs.
- **Security**: `dice.js` uses `crypto.randomInt()` instead of `Math.random()` for stronger randomness guarantees.
- **Bonus challenges implemented**:
  - ANSI-colored terminal logs (`modules/logger.js`)
  - Timestamped logs
  - 4 calculator operations (add/sub/mul/div) instead of just 2
  - Dice roll history stored in `dice-history.txt`

## Rubric Mapping (Total: 2.5 marks)

| Criteria                  | Marks | Covered By |
|----------------------------|-------|------------|
| Functionality               | 1.5   | calculator.js, server.js, fileManager.js, dice.js |
| Code Structure & Modules    | 0.5   | modules/isEven.js, modules/logger.js, app.js |
| Clean Code & Output         | 0.5   | Consistent logging, error handling, comments |
