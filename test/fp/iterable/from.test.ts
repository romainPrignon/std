import { expectTypeOf } from 'vitest'
import { Iterable } from 'ix'
import ix from 'ix/iterable'
import { map } from 'ix/iterable/operators'

// test
import { from } from '../../../src/fp/iterable/from.js'


describe('fp/iterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      // Arrange
      const fun = from(() => [1])

      // Assert
      expectTypeOf<() => ix.IterableX<number>>(fun)

      // Act
      const res = fun()

      // Assert
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      // Arrange
      const fun = from((a) => [a])

      // Assert
      expectTypeOf<(...args: Array<unknown>) => ix.IterableX<unknown>>(fun)

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.IterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      // Arrange
      const fun = from((a: number) => [a])

      // Assert
      expectTypeOf<(...args: Array<number>) => ix.IterableX<number>>(fun)

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      // Arrange
      const fun = from((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => ix.IterableX<number | string>>(fun)

      // Act
      const res = fun(1, 'a')

      // Assert
      expectTypeOf<ix.IterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(Iterable)
      result.pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })

    it('should make result iterable from generator', async () => {
      // Arrange
      const source = function * (): Generator<number> {
        yield 1
      }

      // Act
      const fun:() => Iterable<number> = from(source)
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(Iterable)
      result.pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })
  })
})
