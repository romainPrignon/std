// test
import { concat } from '../../../src/fp/strings/index.js'
import * as strings from '../../../src/fp/strings/index.js'


describe('strings', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 1

      // Act
      const actualExportCount = Object.entries(strings).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export concat function via namespace when imported', () => {
      // Act & Assert
      expect(strings.concat).toBeDefined()
    })

    it('should export concat function via named import when imported', () => {
      // Act & Assert
      expect(concat).toBeDefined()
    })
  })
})
