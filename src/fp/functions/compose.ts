import type { Fun, UnknownArgs, UnknownReturns } from '../../type/index.js'

/**
 * Compose multiple functions into a single function.
 * Functions are composed from right to left.
 */
type Compose = <A extends UnknownArgs, R extends UnknownReturns>(...funs: Array<Fun<A, R>>) => Fun<A, R>

const compose: Compose = (...funs) => (arg) => {
  return funs.reduceRight((acc, fun) => fun(acc), arg)
}

export {
  compose
}
