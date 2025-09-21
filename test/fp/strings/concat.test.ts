import { expectTypeOf } from 'vitest'

// test
import { concat } from '../../../src/fp/strings/concat.js'


describe('fp/strings/concat.ts', () => {
  describe('concat()', () => {
    it('should be typed as curried', () => {
      expectTypeOf<(str: string) => string>(concat('a'))
    })

    it('should be typed as string', () => {
      expectTypeOf<string>(concat('a', 'b'))
    })

    it('should return a concat string', () => {
      expect(concat('b', 'a')).toEqual('ab')
      expect(concat('b')('a')).toEqual('ab')
    })
  })
})
