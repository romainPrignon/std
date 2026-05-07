/**
 * Curries a function, allowing it to be called with a subset of its arguments.
 * 
 * @example
 * const add = (a: number, b: number) => a + b;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2); // 3
 */
export const curry = <T extends any[], R>(fn: (...args: T) => R): any => {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs: any[]) => curried(...args, ...nextArgs);
  };
};

/**
 * Memoizes a function by caching its results based on the arguments.
 * 
 * @example
 * const expensive = (n: number) => n * 2; // imagine this is slow
 * const memoized = memoize(expensive);
 * memoized(10); // calculated
 * memoized(10); // cached
 */
export const memoize = <T extends any[], R>(fn: (...args: T) => R): (...args: T) => R => {
  const cache = new Map<string, R>();
  return (...args: T): R => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
