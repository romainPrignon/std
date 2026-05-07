/**
 * Filters elements of an async iterable based on a predicate.
 *
 * @param iterable - The async iterable to filter.
 * @param predicate - The predicate function.
 * @returns A new async iterable with the filtered elements.
 */
export async function* filter<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => boolean | Promise<boolean>,
): AsyncIterable<T> {
  for await (const value of iterable) {
    if (await predicate(value)) {
      yield value
    }
  }
}
