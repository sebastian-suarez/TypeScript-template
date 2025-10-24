# JavaScript Template

A minimal Node.js starter that uses ECMAScript modules, path aliases, linting, and formatting so you can begin new experiments quickly without rebuilding the same setup.

## Features

- Node.js ESM configuration with `"type": "module"` for modern import/export syntax.
- Path aliasing via `package.json#imports` so files inside `src` can import using `#src/...`.
- Automated code style with Prettier and XO, plus AVA ready for unit testing.
- Husky pre-commit hook running lint-staged to auto-fix staged files before every commit.
- Simple example module (`greet.js`) and entry point (`src/index.js`) to verify the tooling.

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm (bundled with Node.js)

### Installation

```bash
npm install
```

## Available Scripts

- `npm start` – Runs the example application with `nodemon src` and prints a greeting.
- `npm test` – Runs the AVA test suite.
- `npx xo` – Lints the project using XO.
- `npx prettier --write .` – Formats the codebase using Prettier.

## Project Structure

```
src/
  index.js          # Entry point that imports using the #src alias
  modules/
    greet.js        # Sample module demonstrating modular structure
```

### Import Alias

The alias defined in `package.json` lets you write imports such as:

```js
import greet from "#src/modules/greet.js";
```

Adjust the mapping in `package.json#imports` if you reorganize the `src` directory.

## Development Workflow

1. Implement changes in `src/`.
2. Run `npm start` to spin up the `nodemon` watcher while developing.
3. Run `npx xo` to catch lint issues and use `npm test` as you expand the AVA suite.
4. Use Prettier for consistent formatting; Husky + lint-staged will also auto-format staged files on commit.

## License

This project is released under the [MIT License](LICENSE).
