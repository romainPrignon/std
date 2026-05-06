import { expectTypeOf } from 'vitest'
// test
import { callable } from '../../../src/fp/classes/callable.js'


describe('fp/classes/callable.ts', () => {
  describe('callable()', () => {
    it('should be typed as a factory function', () => {
      // Arrange
      class A {}
      const a = callable(A)

      // Assert
      expectTypeOf<(...args: never[]) => A>(a)
      expectTypeOf<A>(a())

      // Arrange
      class B {
        x: number
        y: string
        constructor (x: number, y: string) {
          this.x = x
          this.y = y
        }
      }

      const b = callable(B)

      // Assert
      expectTypeOf<(...args: [number, string]) => B>(b)
      expectTypeOf<B>(b(1, 'foo'))
    })

    it('should return a factory function', () => {
      // Arrange
      class A { }
      const a = callable(A)

      // Act
      const result = a()

      // Assert
      expect(result).toBeInstanceOf(A)
      expect(result).toBeInstanceOf(a)
    })
  })
})
