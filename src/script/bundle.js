#! /usr/bin/env node

import { execSync as shell } from 'child_process'
import pkg from '../../package.json' with { type: 'json' }

const [bundleDir, withDeps, ..._rest] = process.argv.slice(2)

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
