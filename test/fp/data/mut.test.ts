import { describe, expect, it, expectTypeOf } from 'vitest'

// test
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'

describe('fp/data/mut.ts', () => {
  describe('mut()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Assert
      expectTypeOf<typeof array>(mut(imut(array)))
      expectTypeOf<typeof object>(mut(imut(object)))
    })

    it('should return the same reference', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Act
      const res1 = mut(imut(array))
      const res2 = mut(imut(object))

      // Assert
      expect(res1).toBe(array)
      expect(res2).toBe(object)
    })
  })
})
