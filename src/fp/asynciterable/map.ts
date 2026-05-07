/**
 * Transforms each element of an async iterable using a mapping function.
 *
 * @param iterable - The async iterable to map.
 * @param fn - The mapping function.
 * @returns A new async iterable with the mapped elements.
 */
export async function* map<T, U>(
  iterable: AsyncIterable<T> | Iterable<T | Promise<T>>,
  fn: (value: T) => U | Promise<U>,
): AsyncIterable<U> {
  for await (const value of iterable) {
    yield await fn(value)
  }
}
