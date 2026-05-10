// test
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'


describe('data', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 2

      // Act
      const actualExportCount = Object.entries(data).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export all functions via namespace when imported', () => {
      // Arrange
      const expectedFunctions = ['imut', 'mut']

      // Act & Assert
      expectedFunctions.forEach(fnName => {
        expect((data as any)[fnName]).toBeDefined()
      })
    })

    it('should export all functions via named imports when imported', () => {
      // Arrange
      const functions = { imut, mut }

      // Act & Assert
      Object.values(functions).forEach(fn => {
        expect(fn).toBeDefined()
      })
    })
  })
})
