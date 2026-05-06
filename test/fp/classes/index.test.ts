// test
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'

describe('classes', () => {
  describe('namespace exports', () => {
    it('should export classes namespace with all functions', () => {
      // Arrange
      const expectedExports = 2

      // Act
      const exportCount = Object.entries(classes).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(classes.callable).toBeDefined()
      expect(classes.instanceOf).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(callable).toBeDefined()
      expect(instanceOf).toBeDefined()
    })
  })
})
