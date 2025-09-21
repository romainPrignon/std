import { expectTypeOf } from 'vitest'
import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { map } from 'ix/asynciterable/operators'

// test
import { from } from '../../../src/fp/asynciterable/from.js'


describe('fp/asynciterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      const fun = from(() => [1])
      expectTypeOf<() => ix.AsyncIterableX<number>>(fun)

      const res = fun()
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = from((a) => [a])
      expectTypeOf<(...args: Array<unknown>) => ix.AsyncIterableX<unknown>>(fun)

      const res = fun(1)
      expectTypeOf<ix.AsyncIterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = from((a: number) => [a])
      expectTypeOf<(...args: Array<number>) => ix.AsyncIterableX<number>>(fun)

      const res = fun(1)
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = from((a: number, b: string) => a + b)
      expectTypeOf<(...args: [number, string]) => ix.AsyncIterableX<number | string>>(fun)

      const res = fun(1, 'a')
      expectTypeOf<ix.AsyncIterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      expect(fun()).toBeInstanceOf(AsyncIterable)

      // Assert
      await fun().pipe(
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

      // Assert
      expect(fun()).toBeInstanceOf(AsyncIterable)
      await fun().pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })
  })
})
