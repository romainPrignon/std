import { describe, expect, expectTypeOf, it } from 'vitest'
import { instanceOf } from '../../../src/fp/classes/instanceOf.js'

describe('fp/classes/instanceOf.ts', () => {
  describe('instanceOf()', () => {
    it('should return boolean type when checking instance', () => {
      // Arrange
      class A {}
      const a = new A()

      // Act
      const result = instanceOf(A, a)

      // Assert
      expectTypeOf<boolean>(result)
    })

    it('should return typed curried function when providing only class', () => {
      // Arrange
      class A { }

      // Act
      const instanceOfA = instanceOf(A)

      // Assert
      expectTypeOf<(val: unknown) => boolean>(instanceOfA)
    })

    it('should return boolean when calling curried function', () => {
      // Arrange
      class A { }
      const a = new A()
      const instanceOfA = instanceOf(A)

      // Act
      const result = instanceOfA(a)

      // Assert
      expectTypeOf<boolean>(result)
    })

    it('should return true when object is instance of class', () => {
      // Arrange
      class A {}
      const a = new A()

      // Act
      const result = instanceOf(A, a)

      // Assert
      expect(result).toEqual(true)
    })

    it('should return false when object is not instance of class', () => {
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

