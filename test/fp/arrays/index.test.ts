// test
// import {  } from '../../../src/fp/arrays'
import * as arrays from '../../../src/fp/arrays/index.js'


describe('arrays', () => {
  describe('namespace exports', () => {
    it('should export empty namespace when no functions are defined', () => {
      // Arrange
      const expectedExportCount = 0

      // Act
      const actualExportCount = Object.entries(arrays).length

      // Assert
      expect(actualExportCount).toEqual(expectedExportCount)
    })
  })
})
