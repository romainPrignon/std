// test
import { from } from '../../../src/fp/iterable/index.js'
import * as iterable from '../../../src/fp/iterable/index.js'

describe('iterable', () => {
  describe('namespace exports', () => {
    it('should export iterable namespace with all functions', () => {
      // Arrange
      const expectedExports = 1

      // Act
      const exportCount = Object.entries(iterable).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(iterable.from).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(from).toBeDefined()
    })
  })
})
