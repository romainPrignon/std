import { describe, expect, it } from 'vitest'
import { isMultipleOf } from '../../../src/fp/numbers/number.js'

describe('fp/numbers/number.ts', () => {
  describe('isMultipleOf()', () => {
    it('should return true when number is multiple with both params', () => {
      // Arrange
      const divisor = 5
      const value = 15

      // Act
      const result = isMultipleOf(divisor, value)

      // Assert
      expect(result).toEqual(true)
    })

    it('should return true when number is multiple using curried form', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)
      const value = 15

      // Act
      const result = isMultipleOf5(value)

      // Assert
      expect(result).toEqual(true)
    })

    it('should return false when number is not multiple with both params', () => {
      // Arrange
      const divisor = 5
      const value = 16

      // Act
      const result = isMultipleOf(divisor, value)

      // Assert
      expect(result).toEqual(false)
    })

    it('should return false when number is not multiple using curried form', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)
      const value = 16

      // Act
      const result = isMultipleOf5(value)

      // Assert
      expect(result).toEqual(false)
    })
  })
})
