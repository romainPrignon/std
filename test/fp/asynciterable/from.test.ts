import { expectTypeOf } from 'vitest'
import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { map } from 'ix/asynciterable/operators'

// test
import { from } from '../../../src/fp/asynciterable/from.js'


describe('fp/asynciterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      // Arrange
      const fun = from(() => [1])

      // Assert
      expectTypeOf<() => ix.AsyncIterableX<number>>(fun)

      // Act
      const res = fun()

      // Assert
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      // Arrange
      const fun = from((a) => [a])

      // Assert
      expectTypeOf<(...args: Array<unknown>) => ix.AsyncIterableX<unknown>>(fun)

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.AsyncIterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      // Arrange
      const fun = from((a: number) => [a])

      // Assert
      expectTypeOf<(...args: Array<number>) => ix.AsyncIterableX<number>>(fun)

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      // Arrange
      const fun = from((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => ix.AsyncIterableX<number | string>>(fun)

      // Act
      const res = fun(1, 'a')

      // Assert
      expectTypeOf<ix.AsyncIterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(AsyncIterable)
      await result.pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })

    it('should make result iterable from generator', async () => {
      // Arrange
      const source = async function * (): AsyncGenerator<number> {
        yield 1
      }

      // Act
      const fun = from(source)
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(AsyncIterable)
      await result.pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })
  })
})
