import { describe, expect, expectTypeOf, it } from 'vitest'
import { Err } from '../../../src/fp/errors/Error.js'
import { may } from '../../../src/fp/functions/may.js'

describe('fp/functions/may.ts', () => {
  describe('may()', () => {
    it('should return number type when callback returns number', () => {
      // Act & Assert
      expectTypeOf<number>(may(() => 1))
    })

    it('should return union type when both callbacks provided', () => {
      // Act
      const result = may(() => 1, () => 'a')

      // Assert
      expectTypeOf<number | string>(result)
    })

    it('should return Err when callback throws and no fallback provided', () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })

      // Act
      const result = may(() => { throw err })

      // Assert
      expect(result).toEqual(err)
    })

    it('should return value when callback succeeds', () => {
      // Arrange
      const expectedValue = 1

      // Act
      const result = may(() => expectedValue)

      // Assert
      expect(result).toEqual(expectedValue)
    })

    it('should return fallback when callback throws and fallback provided', () => {
      // Arrange
      const err = Err('boom', { code: 'BOOM' })
      const fallbackValue = 2

      // Act
      const result = may(
        () => { throw err },
        () => fallbackValue
      )

      // Assert
      expect(result).toEqual(fallbackValue)
    })
  })
})
