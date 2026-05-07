import { describe, expect, it, expectTypeOf } from 'vitest'

// test
import { instanceOf } from '../../../src/fp/classes/instanceOf.js'

describe('fp/classes/instanceOf.ts', () => {
  describe('instanceOf()', () => {
    it('should be typed as boolean', () => {
      // Arrange
      class A {}
      const a = new A()

      // Assert
      expectTypeOf<boolean>(instanceOf(A, a))
    })

    it('should be typed as curried', () => {
      // Arrange
      class A { }
      const a = new A()
      const instanceOfA = instanceOf(A)

      // Assert
      expectTypeOf<(val: unknown) => boolean>(instanceOfA)
      expectTypeOf<boolean>(instanceOfA(a))
    })

    it('should return true if a instanceof A', () => {
      // Arrange
      class A {}
      const a = new A()

      // Act
      const result = instanceOf(A, a)

      // Assert
      expect(result).toEqual(true)
    })

    it('should return false if b not instanceof A', () => {
      // Arrange
      class A { }
      class B { }
      const b = new B()

      // Act
      const result = instanceOf(A, b)

      // Assert
      expect(result).toEqual(false)
    })
  })
})
