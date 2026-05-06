// test
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'

describe('data', () => {
  describe('namespace exports', () => {
    it('should export data namespace with all functions', () => {
      // Arrange
      const expectedExports = 2

      // Act
      const exportCount = Object.entries(data).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(data.imut).toBeDefined()
      expect(data.mut).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(imut).toBeDefined()
      expect(mut).toBeDefined()
    })
  })
})
