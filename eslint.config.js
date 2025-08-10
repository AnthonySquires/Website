import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['.venv', 'dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.all, // turn everyone on and then turn off the annoying things below
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylistic,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'capitalized-comments': 'off', // Just not a fan
      'func-style': [ // I prefer to keep everything consistent with declaration style components
        'error',
        'declaration',
      ],
      'max-lines-per-function': [
        'error',
        {
          'max': 100, // fine, I'll admit I should probably break stuff up more
        }
      ],
      'no-inline-comments': 'off', // who doesn't want more comments
      'no-magic-numbers': [ // really, 0?
        'error',
        {
          'ignore': [
            0,
          ],
        },
      ],
      'no-ternary': 'off', // I love ternaries
      'no-undefined': 'off', // I like ot use this to check for optional vars
      'one-var': 'off', // I like inline comments and splitting logic blocks
      'id-length': [
        'error',
        {
          exceptions: [
            't', // used by react-i18next
          ],
        },
      ],
      'sort-imports': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      'no-magic-numbers': 'off', // doesn't really serve a purpose when tests expect N items
    },
  },
]);
