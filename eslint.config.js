import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([`dist`]),

  {
    files: [`**/*.{js,jsx}`],
    extends: [
      js.configs.recommended,
      reactHooks.configs[`recommended-latest`],
      reactRefresh.configs.vite,

      // ⬇ Disable ESLint rules that conflict with Prettier
      prettier,
    ],
    plugins: {
      // ⬇ Add Prettier as a linter
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: `latest`,
        ecmaFeatures: { jsx: true },
        sourceType: `module`,
      },
    },
    rules: {
      'prettier/prettier': `error`,

      'no-unused-vars': [`error`, { varsIgnorePattern: `^[A-Z_]` }],
      'padding-line-between-statements': [
        `warn`,
        { blankLine: `always`, prev: `const`, next: `const` },
      ],
      quotes: [
        `warn`, // or "error" if you want strict
        `backtick`,
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
    },
  },
]);
