import { describe, expect, it } from 'vitest'
import * as arrays from '../../../src/fp/arrays/index.js'

describe('arrays', () => {
  describe('namespace', () => {
    it('should export arrays namespace with 0 entries', () => {
      // Act
      const entries = Object.entries(arrays)

      // Assert
      expect(entries.length).toEqual(0)
    })
  })
})
