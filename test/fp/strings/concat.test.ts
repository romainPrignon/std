import { describe, expect, it, expectTypeOf } from 'vitest'

// test
import { concat } from '../../../src/fp/strings/concat.js'

describe('fp/strings/concat.ts', () => {
  describe('concat()', () => {
    it('should be typed as curried', () => {
      // Assert
      expectTypeOf<(str: string) => string>(concat('a'))
    })

    it('should be typed as string', () => {
      // Assert
      expectTypeOf<string>(concat('a', 'b'))
    })

    it('should return a concat string', () => {
      // Act
      const result1 = concat('b', 'a')
      const result2 = concat('b')('a')

      // Assert
      expect(result1).toEqual('ab')
      expect(result2).toEqual('ab')
    })
  })
})
