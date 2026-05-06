// test
import { Err } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'

describe('errors', () => {
  describe('namespace exports', () => {
    it('should export errors namespace with all functions', () => {
      // Arrange
      const expectedExports = 2

      // Act
      const exportCount = Object.entries(errors).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(errors.Err).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(Err).toBeDefined()
    })
  })
})
