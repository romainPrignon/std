import { describe, expect, expectTypeOf, it } from 'vitest'
import { Iterable } from 'ix'
import ix from 'ix/iterable'
import { map } from 'ix/iterable/operators'
import { from } from '../../../src/fp/iterable/from.js'

describe('fp/iterable/from.ts', () => {
  describe('from()', () => {
    it('should return typed function when wrapping simple function', () => {
      // Act
      const fun = from(() => [1])

      // Assert
      expectTypeOf<() => ix.IterableX<number>>(fun)
    })

    it('should return typed iterable when calling wrapped function', () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const res = fun()

      // Assert
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should infer unknown type when function returns parameter without type', () => {
      // Act
      const fun = from((a) => [a])

      // Assert
      expectTypeOf<(...args: Array<unknown>) => ix.IterableX<unknown>>(fun)
    })

    it('should return unknown iterable when calling untyped function', () => {
      // Arrange
      const fun = from((a) => [a])

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.IterableX<unknown>>(res)
    })

    it('should preserve parameter type when function has typed params', () => {
      // Act
      const fun = from((a: number) => [a])

      // Assert
      expectTypeOf<(...args: Array<number>) => ix.IterableX<number>>(fun)
    })

    it('should return typed iterable when calling typed function', () => {
      // Arrange
      const fun = from((a: number) => [a])

      // Act
      const res = fun(1)

      // Assert
      expectTypeOf<ix.IterableX<number>>(res)
    })

    it('should preserve tuple type when function has multiple params', () => {
      // Act
      const fun = from((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => ix.IterableX<number | string>>(fun)
    })

    it('should return union typed iterable when calling multi-param function', () => {
      // Arrange
      const fun = from((a: number, b: string) => a + b)

      // Act
      const res = fun(1, 'a')

      // Assert
      expectTypeOf<ix.IterableX<number | string>>(res)
    })

    it('should create iterable instance when wrapping function', () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(Iterable)
    })

    it('should map values correctly when piping operations', () => {
      // Arrange
      const fun = from(() => [1])
      const expectedValue = 2

      // Act
      const result = fun().pipe(map(val => val + 1))

      // Assert
      result.forEach(val => expect(val).toEqual(expectedValue))
    })

    it('should create iterable from generator function', () => {
      // Arrange
      const source = function * (): Generator<number> {
        yield 1
      }

      // Act
      const fun:() => Iterable<number> = from(source)
      const result = fun()

      // Assert
      expect(result).toBeInstanceOf(Iterable)
    })

    it('should map values from generator when piping operations', () => {
      // Arrange
      const source = function * (): Generator<number> {
        yield 1
      }
      const fun = from(source)
      const expectedValue = 2

      // Act
      const result = fun().pipe(map(val => val + 1))

      // Assert
      result.forEach(val => expect(val).toEqual(expectedValue))
    })
  })
})
