import { describe, expect, expectTypeOf, it } from 'vitest'
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'

describe('fp/data/imut.ts', () => {
  describe('imut()', () => {
    it('should return readonly array type when converting mutable array', () => {
      // Arrange
      const array = [1]

      // Act
      const result = imut(mut(array))

      // Assert
      expectTypeOf<ReadonlyArray<number>>(result)
    })

    it('should return readonly object type when converting mutable object', () => {
      // Arrange
      const object = { a: 'b' }
      type ImmutableObject = {readonly a: string}

      // Act
      const result = imut(mut(object))

      // Assert
      expectTypeOf<ImmutableObject>(result)
    })

    it('should preserve array values when converting to immutable', () => {
      // Arrange
      const array = [1, 2, 3]

      // Act
      const result = imut(mut(array))

      // Assert
      expect(result).toEqual([1, 2, 3])
    })

    it('should preserve object values when converting to immutable', () => {
      // Arrange
      const object = { a: 'b', c: 'd' }

      // Act
      const result = imut(mut(object))

      // Assert
      expect(result).toEqual({ a: 'b', c: 'd' })
    })
  })
})

