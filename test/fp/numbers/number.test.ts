// test
import { isMultipleOf } from '../../../src/fp/numbers/number.js'


describe('fp/numbers/number.ts', () => {
  describe('isMultipleOf()', () => {
    it('should return true for 15 multiple of 5', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)

      // Act
      const res1 = isMultipleOf(5, 15)
      const res2 = isMultipleOf5(15)

      // Assert
      expect(res1).toEqual(true)
      expect(res2).toEqual(true)
    })

    it('should return false for 16 multiple of 5', () => {
      // Arrange
      const isMultipleOf5 = isMultipleOf(5)

      // Act
      const res1 = isMultipleOf(5, 16)
      const res2 = isMultipleOf5(16)

      // Assert
      expect(res1).toEqual(false)
      expect(res2).toEqual(false)
    })
  })
})
