import { describe, expect, expectTypeOf, it } from 'vitest'
import { mut } from '../../../src/fp/data/mut.js'
import { imut } from '../../../src/fp/data/index.js'

describe('fp/data/mut.ts', () => {
  describe('mut()', () => {
    it('should return mutable array type when converting immutable array', () => {
      // Arrange
      const array = [1]

      // Act
      const result = mut(imut(array))

      // Assert
      expectTypeOf<typeof array>(result)
    })

    it('should return mutable object type when converting immutable object', () => {
      // Arrange
      const object = { a: 'b' }

      // Act
      const result = mut(imut(object))

      // Assert
      expectTypeOf<typeof object>(result)
    })

    it('should preserve array values when converting to mutable', () => {
      // Arrange
      const array = [1, 2, 3]

      // Act
      const result = mut(imut(array))

      // Assert
      expect(result).toEqual([1, 2, 3])
    })

    it('should preserve object values when converting to mutable', () => {
      // Arrange
      const object = { a: 'b', c: 'd' }

      // Act
      const result = mut(imut(object))

      // Assert
      expect(result).toEqual({ a: 'b', c: 'd' })
    })

    it('should allow mutations on converted array', () => {
      // Arrange
      const array = [1]
      const result = mut(imut(array))

      // Act
      result.push(2)

      // Assert
      expect(result).toEqual([1, 2])
    })

    it('should allow mutations on converted object', () => {
      // Arrange
      const object = { a: 'b' }
      const result = mut(imut(object))

      // Act
      result.a = 'c'

      // Assert
      expect(result.a).toEqual('c')
    })
  })
})

