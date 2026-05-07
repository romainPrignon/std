import { describe, expect, it } from 'vitest'
import { from } from '../../../src/fp/asynciterable/index.js'
import * as asynciterable from '../../../src/fp/asynciterable/index.js'

describe('asynciterable', () => {
  describe('namespace', () => {
    it('should export asynciterable namespace with 1 entry', () => {
      // Act
      const entries = Object.entries(asynciterable)

      // Assert
      expect(entries.length).toEqual(1)
      expect(asynciterable.from).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(from).toBeDefined()
    })
  })
})
