import eslint from '@eslint/js'
// import vitest from '@vitest/eslint-plugin'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  ...tseslint.configs.recommendedTypeChecked, // enable typescript syntax
  {
    files: ['**/*.{js,ts}']
  },
  {
    ignores: ['src/script/']
  },
  {
    plugins: { promise, n }
  },
  {
    languageOptions: {
      ecmaVersion: 2023, // node 22
      sourceType: 'commonjs'
    }
  },
  // if you want to enable type aware rules
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: true,
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  // },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2023,
        ...globals.jest,
      }
    }
  },
  {
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.eslintRecommended.rules, // disables rules from eslint:recommended which are already handled by ts
      ...tseslint.configs.recommended.rules,
      // ...vitest.configs.recommended.rules,
      ...promise.configs.recommended.rules,
      ...n.configs['flat/recommended-module'].rules,
      // errors rules
      // 'vitest/no-focused-tests': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
      'promise/valid-params': 'error',
      'promise/no-multiple-resolved': 'error',
      // off rules
      'no-unused-vars': 'off', // override by typescript
      'no-multiple-empty-lines': 'off', // give us some space
      'no-use-before-define': 'off', // ts code is compiled to js code. order does not matter
      camelcase: 'off', // not everything should be in camelcase
      '@typescript-eslint/no-explicit-any': 'off', // we will someday
      'n/no-extraneous-import': 'off', // handle by ts and vscode
      'n/no-unpublished-import': 'off', // handle by ts and vscode
      'n/no-missing-import': 'off', // handle by ts and vscode
      // project specific
      'no-new-wrappers': "off"
    }
  }
])
