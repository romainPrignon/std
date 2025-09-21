import { type Maybe } from '../../../src/type/index.js'

import { expectTypeOf } from 'vitest'

// test
import { tail } from '../../../src/oop/arrays/tail.js'


describe('ooprays/tail.ts', () => {
  describe('tail()', () => {
    it('should be typed as undefined for empty array', () => {
      expectTypeOf<undefined>(tail([]))
    })

    it('should be typed as optional number for array of number', () => {
      expectTypeOf<Maybe<number>>(tail([1]))
      expectTypeOf<Maybe<number>>(tail([1, 2]))
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
