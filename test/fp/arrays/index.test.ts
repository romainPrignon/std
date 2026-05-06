// test
import * as arrays from '../../../src/fp/arrays/index.js'

describe('arrays', () => {
  describe('namespace exports', () => {
    it('should export arrays namespace', () => {
      // Arrange
      const expectedExports = 0

      // Act
      const exportCount = Object.entries(arrays).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
    })
  })
})
