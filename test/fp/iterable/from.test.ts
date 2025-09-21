import { expectTypeOf } from 'vitest'
import { Iterable } from 'ix'
import ix from 'ix/iterable'
import { map } from 'ix/iterable/operators'

// test
import { from } from '../../../src/fp/iterable/from.js'


describe('fp/iterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      const fun = from(() => [1])
      expectTypeOf<() => ix.IterableX<number>>(fun)

      const res = fun()
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = from((a) => [a])
      expectTypeOf<(...args: Array<unknown>) => ix.IterableX<unknown>>(fun)

      const res = fun(1)
      expectTypeOf<ix.IterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = from((a: number) => [a])
      expectTypeOf<(...args: Array<number>) => ix.IterableX<number>>(fun)

      const res = fun(1)
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = from((a: number, b: string) => a + b)
      expectTypeOf<(...args: [number, string]) => ix.IterableX<number | string>>(fun)

      const res = fun(1, 'a')
      expectTypeOf<ix.IterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      expect(fun()).toBeInstanceOf(Iterable)

      // Assert
      fun().pipe(
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

      // Assert
      expect(fun()).toBeInstanceOf(Iterable)
      fun().pipe(
        map(val => val + 1)
      ).forEach(val => expect(val).toEqual(2))
    })
  })
})
