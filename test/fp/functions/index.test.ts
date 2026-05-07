import { describe, expect, it } from 'vitest'
import { may, mayAsync, maybe, raise } from '../../../src/fp/functions/index.js'
import * as functions from '../../../src/fp/functions/index.js'

describe('functions', () => {
  describe('namespace', () => {
    it('should export functions namespace with 4 entries', () => {
      // Act
      const entries = Object.entries(functions)

      // Assert
      expect(entries.length).toEqual(4)
      expect(functions.may).toBeDefined()
      expect(functions.mayAsync).toBeDefined()
      expect(functions.maybe).toBeDefined()
      expect(functions.raise).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(may).toBeDefined()
      expect(mayAsync).toBeDefined()
      expect(maybe).toBeDefined()
      expect(raise).toBeDefined()
    })
  })
})
