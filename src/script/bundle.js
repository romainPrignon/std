#! /usr/bin/env node

const { resolve } = require('path')
const shell = require('child_process').execSync

const [bundleDir, withDeps, ..._rest] = process.argv.slice(2)
const pkg = require(resolve('package.json'))

shell(`rm -rf ${bundleDir}`)
shell(`mkdir -p ${bundleDir}`)

shell(`cp -r ${pkg.source}/* ${bundleDir}`)

shell(`mkdir -p ${bundleDir}script/`)
shell(`cp -r src/script/* ${bundleDir}script/`)

pkg.assets.forEach(asset => {
  shell(`cp -r ${asset} ${bundleDir}/${asset}`)
})

Object.values(pkg.bin).forEach(bin => {
  shell(`chmod a+x ${bin}`)
})

if (withDeps === '--withDeps') {
  console.log('npm i --omit=dev')
  shell(`cd ${bundleDir} && npm i --omit=dev`)
}
