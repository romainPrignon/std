import type { Fun, UnknownArgs, UnknownReturns } from '../../type/index.js'

/**
 * Curry a function to accept arguments one at a time.
 */
type Curry = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>) => (...args: A) => Fun<A, R>

const curry: Curry = (fun) => {
  const arity = fun.length
  return function curried(...args: any[]) {
    if (args.length >= arity) {
      return fun(...args as any)
    }
    return curried.bind(null, ...args)
  }
}

export {
  curry
}
