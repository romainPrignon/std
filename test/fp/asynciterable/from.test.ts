import { describe, expect, expectTypeOf, it } from 'vitest'
import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { map } from 'ix/asynciterable/operators'
import { from } from '../../../src/fp/asynciterable/from.js'

describe('fp/asynciterable/from.ts', () => {
  describe('from()', () => {
    it('should return typed function when wrapping simple function', () => {
      // Act
      const fun = from(() => [1])

      // Assert
      expectTypeOf<() => ix.AsyncIterableX<number>>(fun)
    })

    it('should return typed async iterable when calling wrapped function', () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const res = fun()

      // Assert
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should infer unknown type when function returns parameter without type', () => {
      // Act
      const fun = from((a) => [a])

      // Assert
      expectTypeOf<(...args: Array<unknown>) => ix.AsyncIterableX<unknown>>(fun)
    })

    it('should return unknown async iterable when calling untyped function', () => {
      // Arrange
      const fun = from((a) => [a])

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.AsyncIterableX<unknown>>(res)
    })

    it('should preserve parameter type when function has typed params', () => {
      // Act
      const fun = from((a: number) => [a])

      // Assert
      expectTypeOf<(...args: Array<number>) => ix.AsyncIterableX<number>>(fun)
    })

    it('should return typed async iterable when calling typed function', () => {
      // Arrange
      const fun = from((a: number) => [a])

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.AsyncIterableX<number>>(res)
    })

    it('should preserve tuple type when function has multiple params', () => {
      // Act
      const fun = from((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => ix.AsyncIterableX<number | string>>(fun)
    })

    it('should return union typed iterable when calling multi-param function', () => {
      // Arrange
      const fun = from((a: number, b: string) => a + b)

      // Act
      const res = fun(1, 'a')

      // Assert
      expectTypeOf<ix.AsyncIterableX<number | string>>(res)
    })

    it('should create async iterable instance when wrapping function', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(AsyncIterable)
    })

    it('should map values correctly when piping operations', async () => {
      // Arrange
      const fun = from(() => [1])
      const expectedValue = 2

      // Act
      const result = fun().pipe(map(val => val + 1))

      // Assert
      await result.forEach(val => expect(val).toEqual(expectedValue))
    })

    it('should create async iterable from generator function', async () => {
      // Arrange
      const source = async function * (): AsyncGenerator<number> {
        yield 1
      }

      // Act
      const fun = from(source)
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(AsyncIterable)
    })

    it('should map values from generator when piping operations', async () => {
      // Arrange
      const source = async function * (): AsyncGenerator<number> {
        yield 1
      }
      const fun = from(source)
      const expectedValue = 2

      // Act
      const result = fun().pipe(map(val => val + 1))

      // Assert
      await result.forEach(val => expect(val).toEqual(expectedValue))
    })
  })
})

