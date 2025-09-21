import { type Maybe } from '../../../src/type/index.js'

import { expectType } from 'tsd'

// test
import { head } from '../../../src/oop/arrays/head.js'


describe('oop/arrays/head.ts', () => {
  describe('head()', () => {
    it('should be typed as undefined for empty array', () => {
      expectType<undefined>(head([]))
    })

    it('should be typed as optional number for array of number', () => {
      expectType<Maybe<number>>(head([1]))
      expectType<Maybe<number>>(head([1, 2]))
    })

    it('should return undefined for empty array', () => {
      expect(head([])).toEqual(undefined)
    })

    it('should return first element', () => {
      expect(head([1])).toEqual(1)
      expect(head([1, 2])).toEqual(1)
    })
  })
})
