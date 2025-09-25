#! /usr/bin/env node

const shell = require('child_process').execSync

const [_, otpVal] = process.argv.slice(2)

shell('pinst --disable')
shell('pnpm run bundle')
shell(`pnpm publish --provenance --access public --otp=${otpVal}`)
shell('pinst --enable')
