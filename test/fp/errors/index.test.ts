// test
import { Err } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'


describe('errors', () => {
  describe('namespace exports', () => {
    it('should export correct number of exports when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 2

      // Act
      const actualExportCount = Object.entries(errors).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export Err class via namespace when imported', () => {
      // Act & Assert
      expect(errors.Err).toBeDefined()
    })

    it('should export Err class via named import when imported', () => {
      // Act & Assert
      expect(Err).toBeDefined()
    })
  })
})
