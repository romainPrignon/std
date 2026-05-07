import { describe, expect, it } from 'vitest'
import { concat } from '../../../src/fp/strings/index.js'
import * as strings from '../../../src/fp/strings/index.js'

describe('strings', () => {
  describe('namespace', () => {
    it('should export strings namespace with 1 entry', () => {
      // Act
      const entries = Object.entries(strings)

      // Assert
      expect(entries.length).toEqual(1)
      expect(strings.concat).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(concat).toBeDefined()
    })
  })
})
