// test
import { from } from '../../../src/fp/asynciterable/index.js'
import * as asynciterable from '../../../src/fp/asynciterable/index.js'


describe('asynciterable', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 1

      // Act
      const actualExportCount = Object.entries(asynciterable).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export from function via namespace when imported', () => {
      // Act & Assert
      expect(asynciterable.from).toBeDefined()
    })

    it('should export from function via named import when imported', () => {
      // Act & Assert
      expect(from).toBeDefined()
    })
  })
})
