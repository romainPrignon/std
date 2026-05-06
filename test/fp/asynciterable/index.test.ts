// test
import { from } from '../../../src/fp/asynciterable/index.js'
import * as asynciterable from '../../../src/fp/asynciterable/index.js'

describe('asynciterable', () => {
  describe('namespace exports', () => {
    it('should export asynciterable namespace with all functions', () => {
      // Arrange
      const expectedExports = 1

      // Act
      const exportCount = Object.entries(asynciterable).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(asynciterable.from).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(from).toBeDefined()
    })
  })
})
