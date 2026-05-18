import type { Fun, UnknownArgs, UnknownReturns } from '../../type/index.js'

/**
 * Creates a memoized version of a function that caches the results.
 * Subsequent calls with the same arguments will return the cached result.
 * @param fun - The function to memoize
 * @returns A memoized version of the function
 * @example
 * const add = (a: number, b: number) => a + b
 * const memoizedAdd = memoize(add)
 * memoizedAdd(1, 2) // computes and caches result
 * memoizedAdd(1, 2) // returns cached result
 */
const memoize = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>) => {
  const cache = new Map<string, R>()
  
  return ((...args: A): R => {
    // Create a unique key from the arguments
    const key = JSON.stringify(args)
    
    // Check if result is already cached
    if (cache.has(key)) {
      return cache.get(key) as R
    }
    
    // Compute and cache the result
    const result = fun(...args)
    cache.set(key, result)
    
    return result
  })
}

export {
  memoize
}