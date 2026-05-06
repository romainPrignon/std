import { describe, expect, expectTypeOf, it } from 'vitest'
import { Err } from '../../../src/fp/errors/Error.js'
import { mayAsync } from '../../../src/fp/functions/mayAsync.js'

describe('fp/functions/mayAsync.ts', () => {
  describe('mayAsync()', () => {
    it('should return promise of number or Err when no fallback provided', () => {
      // Act & Assert
      expectTypeOf<Promise<number | typeof Err>>(mayAsync(async () => 1))
    })

    it('should return promise of union type when fallback provided', () => {
      // Act
      const result = mayAsync(async () => 1, () => 'a')

      // Assert
      expectTypeOf<Promise<number | string>>(result)
    })

    it('should return Err when async callback throws and no fallback provided', async () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })

      // Act
      const output = await mayAsync(async () => { throw err })

      // Assert
      expect(output).toEqual(err)
    })

    it('should return value when async callback succeeds', async () => {
      // Arrange
      const expectedValue = 1

      // Act
      const output = await mayAsync(async () => expectedValue)

      // Assert
      expect(output).toEqual(expectedValue)
    })

    it('should return fallback when async callback throws and fallback provided', async () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })
      const fallbackValue = 2

      // Act
      const output = await mayAsync(
        async () => { throw err },
        () => fallbackValue
      )

      // Assert
      expect(output).toEqual(fallbackValue)
    })
  })
})
