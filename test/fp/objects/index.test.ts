import { describe, expect, it } from 'vitest'
import * as objects from '../../../src/fp/objects/index.js'

describe('objects', () => {
  describe('namespace', () => {
    it('should export objects namespace with 0 entries', () => {
      // Act
      const entries = Object.entries(objects)

      // Assert
      expect(entries.length).toEqual(0)
    })
  })
})
