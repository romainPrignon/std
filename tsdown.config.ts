import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'bundle/',
  format: 'esm',
  platform: 'neutral', // node and browser
  shims: true, // shims import.meta and require
  exports: true, // rewrite entrypoint in package.json
  treeshake: true,
  dts: true,
  sourcemap: false, // result in a bigger bundle size than minified+sourcemap
  minify: false, // result in a bigger bundle size if used with sourcemap
  unbundle: false, // use true and minify false to debug,
  attw: true
})
