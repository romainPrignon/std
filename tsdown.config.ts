import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'bundle/',
  format: 'esm', // enlever de ts
  // target: 'es5', // enlever d'ici, de ts car utilise packge.json, apres, c'est mieux d'etre explicite meme pour linter
  platform: 'neutral', // node and browser
  shims: true, // shims import.meta and require
  exports: true, // rewrite entrypoint in package.json
  treeshake: true,
  dts: true, // enlever de ts
  sourcemap: false, // result in a bigger bundle size than minified+sourcemap // reomve de ts
  minify: false, // result in a bigger bundle size if used with sourcemap
  unbundle: false, // use true and minify false to debug,
  attw: true
})
