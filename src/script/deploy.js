#! /usr/bin/env node

import { execSync as shell } from 'child_process'

const [_, otpVal] = process.argv.slice(2)

shell('pinst --disable')
shell('pnpm run bundle')
shell(`npm publish --provenance --access public --otp=${otpVal}`)
shell('pinst --enable')
