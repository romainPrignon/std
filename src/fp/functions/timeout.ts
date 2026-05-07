import { delay } from './delay.js'

/**
 * Rejects with an error if the promise does not settle within the specified time.
 *
 * @param promise - The promise to wrap.
 * @param ms - The timeout in milliseconds.
 * @param message - Optional error message.
 * @returns A promise that resolves or rejects based on the input promise or timeout.
 */
export const timeout = <T>(
  promise: Promise<T>,
  ms: number,
  message = `Operation timed out after ${ms}ms`,
): Promise<T> => {
  return Promise.race([
    promise,
    delay(ms).then(() => {
      throw new Error(message)
    }),
  ])
}
