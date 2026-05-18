/**
 * Curries a function, transforming it into a sequence of functions, each taking a single argument.
 *
 * @param fn - The function to curry
 * @returns A curried version of the function
 */
export const curry = <A extends unknown[], R>(fn: (...args: A) => R) => {
  const curried = (...args: unknown[]): any => {
    if (args.length >= fn.length) {
      return fn(...(args as A))
    }
    return (...nextArgs: unknown[]) => curried(...args, ...nextArgs)
  }
  return curried as StrictCurried<A, R>
}

type StrictCurried<A extends unknown[], R> =
  A extends [infer First, ...infer Rest]
  ? Rest extends []
  ? (arg: First) => R  // If it's the last argument, return the result directly
  : (arg: First) => StrictCurried<Rest, R> // Otherwise, move to the next argument
  : () => R // Fallback for a function with no parameters
