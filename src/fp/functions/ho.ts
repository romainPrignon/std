/**
 * Composes multiple functions into a single function.
 * The rightmost function is applied first, then the results are passed to the left.
 *
 * @example
 * const add1 = (n: number) => n + 1;
 * const double = (n: number) => n * 2;
 * const add1ThenDouble = compose(double, add1);
 * add1ThenDouble(2); // (2 + 1) * 2 = 6
 */
export const compose = <T, U>(
  fn1: (arg: any) => U,
  ...fns: Array<(arg: any) => any>
): (arg: T) => U => {
  return (initialValue: T) =>
    fns.reduceRight((acc, fn) => fn(acc), initialValue) as any;
};

/**
 * Pipes a value through a series of functions.
 * The leftmost function is applied first.
 *
 * @example
 * const add1 = (n: number) => n + 1;
 * const double = (n: number) => n * 2;
 * const add1ThenDouble = pipe(add1, double);
 * add1ThenDouble(2); // (2 + 1) * 2 = 6
 */
export const pipe = <T, U>(
  fn1: (arg: T) => any,
  ...fns: Array<(arg: any) => any>
): (arg: T) => U => {
  return (initialValue: T) =>
    fns.reduce((acc, fn) => fn(acc), fn1(initialValue)) as U;
};
