/**
 * Reduces an async iterable to a single value.
 *
 * @param iterable - The async iterable to reduce.
 * @param fn - The reducer function.
 * @param initialValue - The initial value for the reduction.
 * @returns The reduced value.
 */
export async function reduce<T, U>(
  iterable: AsyncIterable<T> | Iterable<T | Promise<T>>,
  fn: (accumulator: U, value: T) => U | Promise<U>,
  initialValue: U,
): Promise<U> {
  let accumulator = initialValue
  for await (const value of iterable) {
    accumulator = await fn(accumulator, value)
  }
  return accumulator
}
