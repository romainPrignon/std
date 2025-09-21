import { expectType } from 'tsd'

// test
import { mut } from '../../../src/oop/data/mut.js'
import { imut } from '../../../src/oop/data/index.js'


describe('oopta/mut.ts', () => {
  describe('mut()', () => {
    it('should be typed correctly', () => {
      const array = [1]
      const object = { a: 'b' }

      expectType<typeof array>(mut(imut(array)))
      expectType<typeof object>(mut(imut(object)))
    })

    it('should return mutable value', () => {
      const array = [1]
      const object = { a: 'b' }

      const _res1 = mut(imut(array))
      const _res2 = mut(imut(object))

      // _res1.push(2) // OK
      // _res2.a = 'c' // OK
    })
  })
})
