import { describe, expect, expectTypeOf, it } from 'vitest'
import { concat } from '../../../src/fp/strings/concat.js'

describe('fp/strings/concat.ts', () => {
  describe('concat()', () => {
    it('should return curried function type when providing only first string', () => {
      // Act & Assert
      expectTypeOf<(str: string) => string>(concat('a'))
    })

    it('should return string type when providing both strings', () => {
      // Act & Assert
      expectTypeOf<string>(concat('a', 'b'))
    })

    it('should concatenate strings when providing both params', () => {
      // Arrange
      const first = 'b'
      const second = 'a'
      const expected = 'ab'

      // Act
      const result = concat(first, second)

      // Assert
      expect(result).toEqual(expected)
    })

    it('should concatenate strings when using curried form', () => {
      // Arrange
      const concatB = concat('b')
      const second = 'a'
      const expected = 'ab'

      // Act
      const result = concatB(second)

      // Assert
      expect(result).toEqual(expected)
    })
  })
})
