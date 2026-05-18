import { describe, expect, it, vi } from 'vitest'
import { retry } from '../../../src/fp/promises/retry.js'

describe('fp/promises/retry.ts', () => {
  describe('retry()', () => {
    it('should resolve immediately if the promise resolves on the first attempt', async () => {
      // Arrange
      const fn = vi.fn(() => Promise.resolve('success'))

      // Act
      const result = await retry(fn, { retries: 3 })

      // Assert
      expect(result).toBe('success')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should retry the specified number of times before failing', async () => {
      // Arrange
      const fn = vi.fn(() => Promise.reject('error'))

      // Act & Assert
      await expect(retry(fn, { retries: 3 })).rejects.toBe('error')
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should resolve if the promise resolves after retries', async () => {
      // Arrange
      let attempt = 0
      const fn = vi.fn(() => {
        attempt++
        return attempt < 3 ? Promise.reject('error') : Promise.resolve('success')
      })

      // Act
      const result = await retry(fn, { retries: 3 })

      // Assert
      expect(result).toBe('success')
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should use default retry count if not specified', async () => {
      // Arrange
      const fn = vi.fn(() => Promise.reject('error'))

      // Act & Assert
      await expect(retry(fn)).rejects.toBe('error')
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should handle custom delay between retries', async () => {
      // Arrange
      const fn = vi.fn(() => Promise.reject('error'))
      const start = Date.now()

      // Act & Assert
      await expect(retry(fn, { retries: 2, delay: 100 })).rejects.toBe('error')
      const end = Date.now()
      expect(end - start).toBeGreaterThanOrEqual(100)
      expect(fn).toHaveBeenCalledTimes(2)
    })
  })
})
