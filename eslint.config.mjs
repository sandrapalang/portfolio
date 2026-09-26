import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier/flat'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default defineConfig([
  prettier,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      import: importPlugin,
      react,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'react/jsx-sort-props': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^@?\\w'],
            ['^@[^.]'],
            ['^\\u0000'],
            [
              '^\\.\\./(?=.*/)',
              '^\\.\\./',
              '^\\./(?=.*/)',
              '^\\.',
              '^.+\\.html$',
              '^.+\\.s?css$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  globalIgnores([
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/.turbo/**',
  ]),
])
