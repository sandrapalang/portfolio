import sanity from '@sanity/eslint-config-studio'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...sanity[0],
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
    settings: {
      // Undviker eslint-plugin-reacts auto-detektering av React-version, som
      // kraschar på ESLint 10 (context.getFilename() togs bort). Ta bort när
      // eslint-plugin-react stödjer ESLint 10 fullt ut. Filen eslint.config.mjs
      // måste själv matchas här (.mjs), annars faller den utanför skyddet.
      react: {
        version: '19',
      },
      next: {
        rootDir: 'app/',
      },
      sanity: {
        rootDir: 'studio/',
      },
    },
  },
  globalIgnores([
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    'app/src/lib/sanity/types.ts',
    'next-env.d.ts',
    '**/.sanity/**',
  ]),
])
