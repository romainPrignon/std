// test
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'


describe('classes', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 2

      // Act
      const actualExportCount = Object.entries(classes).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export all functions via namespace when imported', () => {
      // Arrange
      const expectedFunctions = ['callable', 'instanceOf']

      // Act & Assert
      expectedFunctions.forEach(fnName => {
        expect((classes as any)[fnName]).toBeDefined()
      })
    })

    it('should export all functions via named imports when imported', () => {
      // Arrange
      const functions = { callable, instanceOf }

      // Act & Assert
      Object.values(functions).forEach(fn => {
        expect(fn).toBeDefined()
      })
    })
  })
})
