import { describe, expect, it } from 'vitest'
import { date, epoch, now } from '../../../src/fp/dates/index.js'
import * as dates from '../../../src/fp/dates/index.js'

describe('dates', () => {
  describe('namespace', () => {
    it('should export dates namespace with 3 entries', () => {
      // Act
      const entries = Object.entries(dates)

      // Assert
      expect(entries.length).toEqual(3)
      expect(dates.date).toBeDefined()
      expect(dates.epoch).toBeDefined()
      expect(dates.now).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(date).toBeDefined()
      expect(epoch).toBeDefined()
      expect(now).toBeDefined()
    })
  })
})
