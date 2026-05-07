import { describe, expect, it } from 'vitest'
import { isMultipleOf } from '../../../src/fp/numbers/index.js'
import * as numbers from '../../../src/fp/numbers/index.js'

describe('numbers', () => {
  describe('namespace', () => {
    it('should export numbers namespace with 1 entry', () => {
      // Act
      const entries = Object.entries(numbers)

      // Assert
      expect(entries.length).toEqual(1)
      expect(numbers.isMultipleOf).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(isMultipleOf).toBeDefined()
    })
  })
})
