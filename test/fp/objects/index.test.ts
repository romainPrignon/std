// test
import * as objects from '../../../src/fp/objects/index.js'

describe('objects', () => {
  describe('namespace exports', () => {
    it('should export objects namespace', () => {
      // Arrange
      const expectedExports = 0

      // Act
      const exportCount = Object.entries(objects).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
    })
  })
})
