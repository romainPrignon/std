// test
import { may, mayAsync, maybe, raise } from '../../../src/fp/functions/index.js'
import * as functions from '../../../src/fp/functions/index.js'


describe('functions', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 4

      // Act
      const actualExportCount = Object.entries(functions).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export all functions via namespace when imported', () => {
      // Arrange
      const expectedFunctions = ['may', 'mayAsync', 'maybe', 'raise']

      // Act & Assert
      expectedFunctions.forEach(fnName => {
        expect((functions as any)[fnName]).toBeDefined()
      })
    })

    it('should export all functions via named imports when imported', () => {
      // Arrange
      const fns = { may, mayAsync, maybe, raise }

      // Act & Assert
      Object.values(fns).forEach(fn => {
        expect(fn).toBeDefined()
      })
    })
  })
})
