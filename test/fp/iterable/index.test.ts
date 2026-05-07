import { describe, expect, it } from 'vitest'
import { from } from '../../../src/fp/iterable/index.js'
import * as iterable from '../../../src/fp/iterable/index.js'

describe('iterable', () => {
  describe('namespace', () => {
    it('should export iterable namespace with 1 entry', () => {
      // Act
      const entries = Object.entries(iterable)

      // Assert
      expect(entries.length).toEqual(1)
      expect(iterable.from).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(from).toBeDefined()
    })
  })
})
