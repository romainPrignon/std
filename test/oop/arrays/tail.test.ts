import { Maybe } from '../../../src/type'

import { expectType } from 'tsd'

// test
import { tail } from '../../../src/oop/arrays/tail'


describe('ooprays/tail.ts', () => {
  describe('tail()', () => {
    it('should be typed as undefined for empty array', () => {
      expectType<undefined>(tail([]))
    })

    it('should be typed as optional number for array of number', () => {
      expectType<Maybe<number>>(tail([1]))
      expectType<Maybe<number>>(tail([1, 2]))
    })

    it('should return undefined for empty array', () => {
      expect(tail([])).toEqual(undefined)
    })

    it('should return first element', () => {
      expect(tail([1])).toEqual(1)
      expect(tail([1, 2])).toEqual(2)
    })
  })
})
