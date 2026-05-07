import type { Fun, UnknownArgs, UnknownReturns } from '../../type/index.js'

/**
 * Memoize a function to cache its results.
 */
type Memoize = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>) => Fun<A, R>

const memoize: Memoize = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>): Fun<A, R> => {
  const cache = new Map<string, R>()
  return ((...args: A) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)!
    }
    const result = fun(...args)
    cache.set(key, result)
    return result
  }) as Fun<A, R>
}

export {
  memoize
}
