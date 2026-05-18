/**
 * Retries a promise-returning function until it succeeds or the maximum number of retries is reached.
 * @template T - The type of the resolved value of the promise.
 * @param {() => Promise<T>} fn - The promise-returning function to retry.
 * @param {Object} [options] - Configuration options for the retry mechanism.
 * @param {number} [options.retries=3] - The maximum number of retry attempts.
 * @param {number} [options.delay=1000] - The delay (in milliseconds) between retry attempts.
 * @returns {Promise<T>} A promise that resolves with the result of the function or rejects after all retries are exhausted.
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  options?: {
    retries?: number
    delay?: number
  },
): Promise<T> => {
  const { retries = 3, delay = 1000 } = options || {}

  try {
    return await fn()
  } catch (error) {

    if (retries <= 0) {
      throw error
    }

    await new Promise((resolve) => setTimeout(resolve, delay))

    return retry(fn, { retries: retries - 1, delay })
  }
}
