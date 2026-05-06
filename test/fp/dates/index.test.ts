// test
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'

describe('dates', () => {
  describe('namespace exports', () => {
    it('should export dates namespace with all functions', () => {
      // Arrange
      const expectedExports = 3

      // Act
      const exportCount = Object.entries(dates).length

      // Assert
      expect(exportCount).toEqual(expectedExports)
      expect(dates.date).toBeDefined()
      expect(dates.epoch).toBeDefined()
      expect(dates.now).toBeDefined()
    })

    it('should export all functions individually', () => {
      // Arrange & Act & Assert
      expect(date).toBeDefined()
      expect(epoch).toBeDefined()
      expect(now).toBeDefined()
    })
  })
})
