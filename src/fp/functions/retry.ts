import { delay } from './delay.js'

export interface RetryOptions {
  retries?: number
  delayMs?: number
  onRetry?: (error: unknown, attempt: number) => void
}

/**
 * Retries an asynchronous operation a specified number of times.
 *
 * @param fn - The asynchronous operation to retry.
 * @param options - Retry configuration.
 * @returns The result of the operation.
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  { retries = 3, delayMs = 0, onRetry }: RetryOptions = {},
): Promise<T> => {
  let lastError: unknown

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      if (attempt <= retries) {
        if (onRetry) onRetry(error, attempt)
        if (delayMs > 0) await delay(delayMs)
      }
    }
  }

  throw lastError
}
