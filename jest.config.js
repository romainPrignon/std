module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test/**/*.test.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 95,
      branches: 100,
      statements: 95,
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/script/*.{js,ts}',
  ]
}
