// test
import { isMultipleOf } from '../../../src/fp/numbers/index.js'
import * as numbers from '../../../src/fp/numbers/index.js'

describe('numbers', () => {
  describe('namespace exports', () => {
    it('should export numbers namespace with all functions', () => {
      // Arrange
      const expectedExports = 1

      // Act
      const exportCount = Object.entries(numbers).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(numbers.isMultipleOf).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(isMultipleOf).toBeDefined()
    })
  })
})
