import { expectType } from 'tsd'

// test
import { mut } from '../../../src/oop/data/mut.js'
import { imut } from '../../../src/oop/data/index.js'


describe('oopta/mut.ts', () => {
  describe('imut()', () => {
    it('should be typed correctly', () => {
      const array = [1]
      const object = { a: 'b' }
      type ImmutableObject = {readonly a: string}

      expectType<ReadonlyArray<number>>(imut(mut(array)))
      expectType<ImmutableObject>(imut(mut(object)))
    })

    it('should return immutable value', () => {
      const array = [1]
      const object = { a: 'b' }

      // array.push(2) // OK
      // object.a = 'c' // OK

      const _res1 = imut(mut(array))
      const _res2 = imut(mut(object))

      // _res1.push(2) // NOK
      // _res2.a = 'c' // NOK
    })
  })
})
