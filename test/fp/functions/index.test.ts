// test
import { may, mayAsync, maybe, raise } from '../../../src/fp/functions/index.js'
import * as functions from '../../../src/fp/functions/index.js'

describe('functions', () => {
  describe('namespace exports', () => {
    it('should export functions namespace with all functions', () => {
      // Arrange
      const expectedExports = 4

      // Act
      const exportCount = Object.entries(functions).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(functions.may).toBeDefined()
      expect(functions.mayAsync).toBeDefined()
      expect(functions.maybe).toBeDefined()
      expect(functions.raise).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(may).toBeDefined()
      expect(mayAsync).toBeDefined()
      expect(maybe).toBeDefined()
      expect(raise).toBeDefined()
    })
  })
})
