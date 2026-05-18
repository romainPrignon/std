/**
 * Pipes the output of an initial value through a sequence of functions from left to right.
 *
 * @param fns - Functions to pipe the initial value through.
 * @returns A function that takes an initial value and pipes it through the provided functions.
 */
export const pipe = <Fns extends Array<Function>>(...fns: VerifyPipeline<Fns>) =>
  ((initialValue: any) => fns.reduce((acc, fn) => fn(acc), initialValue)) as
  Fns extends []
  ? <T>(arg: T) => T
  : (arg: FirstInput<Fns>) => LastOutput<Fns>


// 1. Extracts the input parameter of the very first function executed (the leftmost one)
type FirstInput<Fns extends Array<Function>> =
  Fns extends [(arg: infer In) => any, ...any[]] ? In : never

// 2. Extracts the final return type of the very last function executed (the rightmost one)
type LastOutput<Fns extends any[]> =
  Fns extends [...any[], (...args: any[]) => infer Out] ? Out : never

// 3. The engine: Recursively walks the array forward to ensure outputs feed into inputs cleanly
type VerifyPipeline<Fns extends any[]> =
  Fns extends [infer Current, infer Next, ...infer Rest]
  ? Current extends (...args: any[]) => any
  ? Next extends (arg: infer NextIn) => any
  ? [Current] extends [(arg: any) => NextIn]
  ? [Current, ...VerifyPipeline<[Next, ...Rest]>]
  : never
  : never
  : never
  : Fns
