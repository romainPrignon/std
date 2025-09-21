import { defineConfig, type ViteUserConfig } from 'vitest/config'

const config: ViteUserConfig = defineConfig({
  test: {
    environment: 'node',
    sequence: {
      shuffle: true // shuffle test execution order on each run
    },
    globals: true,
    coverage: {
      include: ['src/'],
      exclude: ['src/script/'],
      reporter: ['text-summary', 'html'],
      thresholds: {
        functions: 100,
        lines: 100,
        branches: 96,
        statements: 100,
      }
    },
    include: ['test/**/*.test.ts'],
    typecheck: {
      include: ['test/**/*.test.ts'],
    }
  }
})

export default config
