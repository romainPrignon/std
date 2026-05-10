// test
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'


describe('dates', () => {
  describe('namespace exports', () => {
    it('should export correct number of functions when accessing namespace', () => {
      // Arrange
      const expectedExportCount = 3

      // Act
      const actualExportCount = Object.entries(dates).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })

    it('should export all functions via namespace when imported', () => {
      // Arrange
      const expectedFunctions = ['date', 'epoch', 'now']

      // Act & Assert
      expectedFunctions.forEach(fnName => {
        expect((dates as any)[fnName]).toBeDefined()
      })
    })

    it('should export all functions via named imports when imported', () => {
      // Arrange
      const functions = { date, epoch, now }

      // Act & Assert
      Object.values(functions).forEach(fn => {
        expect(fn).toBeDefined()
      })
    })
  })
})
