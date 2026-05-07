import { describe, expect, it } from 'vitest'
import { callable, instanceOf } from '../../../src/fp/classes/index.js'
import * as classes from '../../../src/fp/classes/index.js'

describe('classes', () => {
  describe('namespace', () => {
    it('should export classes namespace with 2 entries', () => {
      // Act
      const entries = Object.entries(classes)

      // Assert
      expect(entries.length).toEqual(2)
      expect(classes.callable).toBeDefined()
      expect(classes.instanceOf).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(callable).toBeDefined()
      expect(instanceOf).toBeDefined()
    })
  })
})
