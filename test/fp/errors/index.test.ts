import { describe, expect, it } from 'vitest'
import { Err, inherit } from '../../../src/fp/errors/index.js'
import * as errors from '../../../src/fp/errors/index.js'

describe('errors', () => {
  describe('namespace', () => {
    it('should export errors namespace with 2 entries', () => {
      // Act
      const entries = Object.entries(errors)

      // Assert
      expect(entries.length).toEqual(2)
      expect(errors.Err).toBeDefined()
      expect(errors.inherit).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(Err).toBeDefined()
      expect(inherit).toBeDefined()
    })
  })
})
