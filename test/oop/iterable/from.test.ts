import { expectType } from 'tsd'
import { Iterable } from 'ix'
import ix from 'ix/iterable'

// test
import { from } from '../../../src/oop/iterable/from.js'


describe('oop/iterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      const fun = from(() => [1])
      expectType<() => ix.IterableX<number>>(fun)

      const res = fun()
      expectType<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = from((a) => [a])
      expectType<(...args: Array<unknown>) => ix.IterableX<unknown>>(fun)

      const res = fun(1)
      expectType<ix.IterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = from((a: number) => [a])
      expectType<(...args: Array<number>) => ix.IterableX<number>>(fun)

      const res = fun(1)
      expectType<ix.IterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = from((a: number, b: string) => a + b)
      expectType<(...args: [number, string]) => ix.IterableX<number | string>>(fun)

      const res = fun(1, 'a')
      expectType<ix.IterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(Iterable)

      const res2 = fun()
        .map(val => val + 1)

      for (const val of res2) {
        expect(val).toEqual(2)
      }
    })

    it('should make result iterable from generator', () => {
      // Arrange
      const source = function * (): Generator<number> {
        yield 1
      }

      const fun = from(source)

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(Iterable)

      const res2 = fun()
        .map(val => val + 1)

      for (const val of res2) {
        expect(val).toEqual(2)
      }
    })
  })
})
