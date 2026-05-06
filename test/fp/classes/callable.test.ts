import { describe, expect, expectTypeOf, it } from 'vitest'
import { callable } from '../../../src/fp/classes/callable.js'

describe('fp/classes/callable.ts', () => {
  describe('callable()', () => {
    it('should return typed factory function when class has no constructor params', () => {
      // Arrange
      class A {}

      // Act
      const factory = callable(A)

      // Assert
      expectTypeOf<(...args: never[]) => A>(factory)
    })

    it('should return typed instance when calling factory with no params', () => {
      // Arrange
      class A {}
      const factory = callable(A)

      // Act
      const instance = factory()

      // Assert
      expectTypeOf<A>(instance)
    })

    it('should return typed factory function when class has constructor params', () => {
      // Arrange
      class B {
        x: number
        y: string
        constructor (x: number, y: string) {
          this.x = x
          this.y = y
        }
      }

      // Act
      const factory = callable(B)

      // Assert
      expectTypeOf<(...args: [number, string]) => B>(factory)
    })

    it('should return typed instance when calling factory with params', () => {
      // Arrange
      class B {
        x: number
        y: string
        constructor (x: number, y: string) {
          this.x = x
          this.y = y
        }
      }
      const factory = callable(B)

      // Act
      const instance = factory(1, 'foo')

      // Assert
      expectTypeOf<B>(instance)
    })

    it('should create instance of original class when calling factory', () => {
      // Arrange
      class A { }
      const factory = callable(A)

      // Act
      const instance = factory()

      // Assert
      expect(instance).toBeInstanceOf(A)
    })

    it('should create instance of factory when calling factory', () => {
      // Arrange
      class A { }
      const factory = callable(A)

      // Act
      const instance = factory()

      // Assert
      expect(instance).toBeInstanceOf(factory)
    })
  })
})

