import { describe, expect, it } from 'vitest'
import { imut, mut } from '../../../src/fp/data/index.js'
import * as data from '../../../src/fp/data/index.js'

describe('data', () => {
  describe('namespace', () => {
    it('should export data namespace with 2 entries', () => {
      // Act
      const entries = Object.entries(data)

      // Assert
      expect(entries.length).toEqual(2)
      expect(data.imut).toBeDefined()
      expect(data.mut).toBeDefined()
    })

    it('should export all individual functions', () => {
      // Assert
      expect(imut).toBeDefined()
      expect(mut).toBeDefined()
    })
  })
})
