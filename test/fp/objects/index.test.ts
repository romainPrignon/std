// test
import * as objects from '../../../src/fp/objects/index.js'


describe('objects', () => {
  describe('namespace exports', () => {
    it('should export empty namespace when no functions are defined', () => {
      // Arrange
      const expectedExportCount = 0

      // Act
      const actualExportCount = Object.entries(objects).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })
  })
})
