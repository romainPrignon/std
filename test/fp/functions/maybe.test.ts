import { describe, expect, expectTypeOf, it } from 'vitest'
import { type Maybe } from '../../../src/type/index.js'
import { maybe } from '../../../src/fp/functions/maybe.js'

describe('fp/functions/maybe.ts', () => {
  describe('maybe()', () => {
    it('should return function returning Maybe of number when wrapping simple function', () => {
      // Act
      const opt = maybe(() => 1)

      // Assert
      expectTypeOf<(...args: Array<never>) => Maybe<number>>(opt)
    })

    it('should return Maybe of number when calling wrapped simple function', () => {
      // Arrange
      const opt = maybe(() => 1)

      // Act
      const res = opt()

      // Assert
      expectTypeOf<Maybe<number>>(res)
    })

    it('should return function returning Maybe of undefined when function returns undefined', () => {
      // Act
      const opt = maybe(() => undefined)

      // Assert
      expectTypeOf<(...args: Array<never>) => Maybe<undefined>>(opt)
    })

    it('should return Maybe when calling wrapped function returning undefined', () => {
      // Arrange
      const opt = maybe(() => undefined)

      // Act
      const res = opt()

      // Assert
      expectTypeOf<Maybe<number>>(res)
    })

    it('should return function with unknown params when wrapping untyped function', () => {
      // Act
      const opt = maybe((a) => a)

      // Assert
      expectTypeOf<(...args: Array<unknown>) => Maybe<unknown>>(opt)
    })

    it('should return Maybe of unknown when calling untyped wrapped function', () => {
      // Arrange
      const opt = maybe((a) => a)

      // Act
      const res = opt(1)

      // Assert
      expectTypeOf<Maybe<unknown>>(res)
    })

    it('should preserve parameter types when wrapping typed function', () => {
      // Act
      const opt = maybe((a: number) => a)

      // Assert
      expectTypeOf<(...args: Array<number>) => Maybe<number>>(opt)
    })

    it('should return typed Maybe when calling typed wrapped function', () => {
      // Arrange
      const opt = maybe((a: number) => a)

      // Act
      const res = opt(1)

      // Assert
      expectTypeOf<Maybe<number>>(res)
    })

    it('should preserve tuple types when wrapping multi-param function', () => {
      // Act
      const opt = maybe((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => Maybe<number | string>>(opt)
    })

    it('should return union typed Maybe when calling multi-param wrapped function', () => {
      // Arrange
      const opt = maybe((a: number, b: string) => a + b)

      // Act
      const res = opt(1, 'a')

      // Assert
      expectTypeOf<Maybe<number | string>>(res)
    })

    it('should return value when wrapped function succeeds', () => {
      // Arrange
      const opt = maybe(() => 1)
      const expectedValue = 1

      // Act
      const result = opt()

      // Assert
      expect(result).toEqual(expectedValue)
    })

    it('should return undefined when wrapped function returns undefined', () => {
      // Arrange
      const opt = maybe(() => undefined)

      // Act
      const result = opt()

      // Assert
      expect(result).toEqual(undefined)
    })

    it('should preserve input value when wrapping identity function', () => {
      // Arrange
      const opt = maybe((a) => a)
      const inputValue = 1

      // Act
      const result = opt(inputValue)

      // Assert
      expect(result).toEqual(inputValue)
    })

    it('should compute result correctly when wrapping multi-param function', () => {
      // Arrange
      const opt = maybe((a: number, b: number) => a + b)
      const expectedValue = 2

      // Act
      const result = opt(1, 1)

      // Assert
      expect(result).toEqual(expectedValue)
    })
  })
})
