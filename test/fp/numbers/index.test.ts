// test
import { isMultipleOf } from '../../../src/fp/numbers/index.js'
import * as numbers from '../../../src/fp/numbers/index.js'


describe('numbers', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 1

      // Act
      const actualExportCount = Object.entries(numbers).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export isMultipleOf function via namespace when imported', () => {
      // Act & Assert
      expect(numbers.isMultipleOf).toBeDefined()
    })

    it('should export isMultipleOf function via named import when imported', () => {
      // Act & Assert
      expect(isMultipleOf).toBeDefined()
    })
  })
})
