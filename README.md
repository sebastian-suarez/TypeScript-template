# 🚀 TypeScript Template

A friendly Node.js + TypeScript starter that ships with batteries-included tooling so you can jump straight into building without chasing configuration chores.

## ✨ Features

- TypeScript-first setup with ESM output for modern module syntax.
- Smart path aliasing via `package.json#imports` for tidy `#src/...` imports.
- XO + Prettier keep the codebase clean, and AVA handles fast unit tests.
- Husky and lint-staged run your linters automatically before every commit.
- Example `greet` module demonstrates how the pieces fit together out of the box.

## ⚡ Quick Start

```bash
npm install
npm start
```

> `npm start` uses `tsx` to compile and run `src/index.ts`, printing a friendly greeting.

### ✅ Requirements

- Node.js `>=18`
- npm (bundled with Node.js)

## 📜 Scripts

- `npm start` – Launches the TypeScript entry point with live reload via `tsx watch`.
- `npm test` – Runs the AVA suite with TypeScript support ready to go.
- `npx xo` – Lints the project (auto-fix with `--fix` if you want).
- `npx prettier --write .` – Formats Markdown, JSON, and source files.

## 🗂️ Project Structure

```
src/
  index.ts          # Entry point using the #src alias
  modules/
    greet.ts        # Sample module showcasing typed exports
```

## 🧭 Import Alias

The alias in `package.json` lets you write imports like:

```ts
import greet from "#src/modules/greet.js";
```

Keep the `.js` extension in your TypeScript imports so the emitted ESM remains valid.

## 🔁 Development Flow

- Edit files in `src/` and watch `npm start` reload instantly.
- Keep the linters happy with `npx xo` and `npx prettier --write .`.
- Expand `npm test` as you add new AVA specs (see `tests/`).

## 📄 License

Released under the [MIT License](LICENSE). Have fun building! 🎉
