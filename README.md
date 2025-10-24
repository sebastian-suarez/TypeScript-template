# 🚀 TypeScript Template

A friendly Node.js + TypeScript starter that ships with batteries-included tooling so you can jump straight into building without chasing configuration chores.

## ✨ Features

- TypeScript-first setup powered by `tsx` for instant compile + run feedback.
- Modern ESM output with path aliasing via `package.json#imports` for tidy `#src/...` imports.
- XO + Prettier enforce consistent style, while AVA covers the unit-test workflow.
- Husky and lint-staged keep commits clean by running your lint + format tasks automatically.
- Example `greet` module and AVA test showcase how to wire up new features quickly.
- `.env` support baked in via `dotenv` so local secrets load automatically during scripts and tests.

## ⚡ Quick Start

```bash
npm install
npm start    # runs the watcher with dotenv preloaded
npm test     # executes the AVA test suite
```

> `npm start` uses `tsx` to compile and run `src/index.ts`, printing a friendly greeting. Tests pick up TypeScript via `@ava/typescript` and share the same `.env` configuration.

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

## 🔐 Environment Variables

- Copy `.env.example` to `.env` to wire up local configuration.
- Scripts and tests preload `dotenv/config`, so `process.env.MY_VAR` is ready to use inside your code.

## 🔁 Development Flow

- Edit files in `src/` and watch `npm start` reload instantly.
- Keep the linters happy with `npx xo` and `npx prettier --write .`.
- Expand `npm test` as you add new AVA specs (see `tests/`).

## 📄 License

Released under the [MIT License](LICENSE). Have fun building! 🎉
