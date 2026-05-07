import { expectTypeOf } from 'vitest'

// test
import { concat } from '../../../src/fp/strings/concat.js'


describe('fp/strings/concat.ts', () => {
  describe('concat()', () => {
    it('should be typed as curried', () => {
      // Act
      const result = concat('a')

      // Assert
      expectTypeOf<(str: string) => string>(result)
    })

    it('should be typed as string', () => {
      // Act
      const result = concat('a', 'b')

      // Assert
      expectTypeOf<string>(result)
    })

    it('should return a concat string', () => {
      // Arrange
      const str1 = 'b'
      const str2 = 'a'

      // Act
      const res1 = concat(str1, str2)
      const res2 = concat(str1)(str2)

      // Assert
      expect(res1).toEqual('ab')
      expect(res2).toEqual('ab')
    })
  })
})
