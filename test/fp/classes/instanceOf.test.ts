import { expectTypeOf } from 'vitest'

// test
import { instanceOf } from '../../../src/fp/classes/instanceOf.js'


describe('fp/classes/instanceOf.ts', () => {
  describe('instanceOf()', () => {
    it('should be typed as boolean', () => {
      class A {}
      const a = new A()

      expectTypeOf<boolean>(instanceOf(A, a))
    })

    it('should be typed as curried', () => {
      class A { }
      const a = new A()
      const instanceOfA = instanceOf(A)

      expectTypeOf<(val: unknown) => boolean>(instanceOfA)
      expectTypeOf<boolean>(instanceOfA(a))
    })

    it('should return true if a instanceof A', () => {
      class A {}
      const a = new A()

      expect(instanceOf(A, a)).toEqual(true)
    })

    it('should return false if b not instanceof A', () => {
      class A { }
      class B { }
      const b = new B()

      expect(instanceOf(A, b)).toEqual(false)
    })
  })
})
