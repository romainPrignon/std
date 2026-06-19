import { defineConfig } from 'oxlint'

export default defineConfig({
  ignorePatterns: ["src/script/"],
  env: {
    builtin: true,
    es2024: true,
    jest: true,
    node: true,
    "shared-node-browser": true
  },
  plugins: [
    "eslint",
    "node",
    "oxc",
    "promise",
    "typescript",
    "vitest"
  ],
  options: {
    typeAware: true
  },
  categories: {
    correctness: "error",
    restriction: "error",
    perf: "error",
  },
  rules: {
    // errors rules
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'promise/no-multiple-resolved': 'error',
    "typescript/no-unsafe-type-assertion": "error",
    'typescript/array-type': ['error', { default: 'generic' }],
    'typescript/no-explicit-any': 'error', // TODO
    // off rules
    'no-use-before-define': 'off', // ts code is compiled to js code. order does not matter
    'eslint/no-underscore-dangle': 'off', // allow _ to mark unused variables
    'eslint/no-undefined': 'off', // we need to use undefined sometiems
    'eslint/no-empty-function': 'off', // empty function usually have clear intent
    'oxc/no-async-await': 'off', // async await are allowed in es6
    'oxc/no-optional-chaining': 'off', // safe to use now
    'typescript/explicit-member-accessibility': 'off', // typescript accessor are not same as native
    'typescript/promise-function-async': 'off', // we sometimes return a promise object
    'typescript/no-invalid-void-type': 'off', // some generics require void
    "vitest/require-test-timeout": "off", // too heavy to maintain
    'vitest/expect-expect': 'off' // tests with expectTypeOf have an expect
  }
})
