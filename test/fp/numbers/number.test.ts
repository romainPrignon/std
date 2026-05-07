import { describe, expect, it } from 'vitest'
// test
import { isMultipleOf } from '../../../src/fp/numbers/number.js'

describe('fp/numbers/number.ts', () => {
  describe('isMultipleOf()', () => {
    it('should return true for 15 multiple of 5', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)

      // Act
      const result1 = isMultipleOf(5, 15)
      const result2 = isMultipleOf5(15)

      // Assert
      expect(result1).toEqual(true)
      expect(result2).toEqual(true)
    })

    it('should return false for 16 multiple of 5', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)

      // Act
      const result1 = isMultipleOf(5, 16)
      const result2 = isMultipleOf5(16)

      // Assert
      expect(result1).toEqual(false)
      expect(result2).toEqual(false)
    })
  })
})
