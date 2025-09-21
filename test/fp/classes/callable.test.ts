import { expectType } from 'tsd'

// test
import { callable } from '../../../src/fp/classes/callable.js'


describe('fp/classes/callable.ts', () => {
  describe('callable()', () => {
    it('should be typed as a factory function', () => {
      class A {}
      const a = callable(A)
      expectType<(...args: never[]) => A>(a)
      expectType<A>(a())

      class B {
        x: number
        y: string
        constructor (x: number, y: string) {
          this.x = x
          this.y = y
        }
      }

      const b = callable(B)
      expectType<(...args: [number, string]) => B>(b)
      expectType<B>(b(1, 'foo'))
    })

    it('should return a factory function', () => {
      class A { }
      const a = callable(A)

      expect(a()).toBeInstanceOf(A)
      expect(a()).toBeInstanceOf(a)
    })
  })
})
