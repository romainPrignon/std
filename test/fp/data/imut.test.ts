import { describe, expect, it, expectTypeOf } from 'vitest'

// test
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'

describe('fp/data/imut.ts', () => {
  describe('imut()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }
      type ImmutableObject = {readonly a: string}

      // Assert
      expectTypeOf<ReadonlyArray<number>>(imut(mut(array)))
      expectTypeOf<ImmutableObject>(imut(mut(object)))
    })

    it('should return the same reference', () => {
      // Arrange
      const array = [1]
      const object = { a: 'b' }

      // Act
      const res1 = imut(mut(array))
      const res2 = imut(mut(object))

      // Assert
      expect(res1).toBe(array)
      expect(res2).toBe(object)
    })
  })
})
