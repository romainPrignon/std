import { defineConfig } from 'eslint/config'
import oxlint from 'eslint-plugin-oxlint'
import eslintConfig from './eslint.config.js'

export default defineConfig([
  ...eslintConfig,
  ...oxlint.buildFromOxlintConfigFile('./oxlint.config.js') // disable eslint rules that are already checked by oxlint
])
