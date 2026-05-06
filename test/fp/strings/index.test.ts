// test
import { concat } from '../../../src/fp/strings/index.js'
import * as strings from '../../../src/fp/strings/index.js'

describe('strings', () => {
  describe('namespace exports', () => {
    it('should export strings namespace with all functions', () => {
      // Arrange
      const expectedExports = 1

      // Act
      const exportCount = Object.entries(strings).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(strings.concat).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(concat).toBeDefined()
    })
  })
})
