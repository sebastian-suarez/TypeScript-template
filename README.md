# TypeScript Template

A starting point for Node.js projects written in TypeScript and run as native ESM. Create a repository from it and you get a working entry point, a test, linting, formatting and a pre-commit hook, with nothing to configure.

## Start here

- Create a new repository with **Use this template** on GitHub, then `npm install`.
- `src/index.ts` is the entry point and `tests/index.test.ts` the sample test; replace both with your own code.
- Work on the template itself is tracked on the [TypeScript Template board](https://github.com/users/sebastian-suarez/projects/4) (see [How work is tracked](#how-work-is-tracked)).

## Layout

| Path                       | What it holds                                                              |
| -------------------------- | -------------------------------------------------------------------------- |
| `src/`                     | Source. `index.ts` is the entry point, `modules/greet.ts` a sample module. |
| `tests/`                   | Vitest tests.                                                              |
| `docs/board/`              | The board's config and card files.                                         |
| `tsconfig.json`            | Type-check config, extending `@tsconfig/node24`; it never emits files.     |
| `xo.config.ts`             | XO lint rules, with Prettier integration.                                  |
| `.prettierrc`              | Prettier formatting (tabs, double quotes).                                 |
| `.husky/`, `.lintstagedrc` | Pre-commit hook: XO and Prettier on staged files, then the type check.     |

## Develop

Requires Node.js 24.15+ or 26+ (Vitest 5 doesn't support Node 25). Node runs TypeScript directly by stripping the types.

```bash
npm install
npm start          # run src/index.ts with Node
npm test           # Vitest in watch mode
npm run typecheck  # TypeScript 7, checking types only
npm run lint       # XO, fixing what it can
npm run format     # Prettier on every file
```

Import from `src/` through the `#src/*` alias defined in `package.json#imports`, with `.ts` specifiers: `import greet from "#src/modules/greet.ts";`. Use only TypeScript syntax that Node can strip: no enums, namespaces or parameter properties (`erasableSyntaxOnly` in `tsconfig.json` rejects them).

`tsc` is TypeScript 7 (the `@typescript/native` package). XO lints through typescript-eslint, which needs the TypeScript 6 API that 7.0 doesn't ship, so `typescript` is aliased to `@typescript/typescript6`, following [Microsoft's side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-60). Drop the alias once typescript-eslint supports TypeScript 7.

## How work is tracked

Changes to the template are tracked on the [TypeScript Template board](https://github.com/users/sebastian-suarez/projects/4), a GitHub Project linked to this repository. `docs/board/board.json` identifies the project, and each card has a file in `docs/board/`, which is the source of truth for the board. Repositories created from this template inherit `docs/board/board.json`, so replace it with their own board's config or delete it.

## License

[MIT](LICENSE)
