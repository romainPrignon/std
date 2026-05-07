import { describe, expect, it, expectTypeOf } from 'vitest'
import { type Maybe } from '../../../src/type/index.js'

// test
import { maybe } from '../../../src/fp/functions/maybe.js'

describe('fp/functions/maybe.ts', () => {
  describe('maybe()', () => {
    it('should be typed correctly for simple function', () => {
      // Arrange
      const opt = maybe(() => 1)

      // Assert
      expectTypeOf<(...args: Array<never>) => Maybe<number>>(opt)

      const res = opt()
      expectTypeOf<Maybe<number>>(res)
    })

    it('should be typed correctly for function returning undefined', () => {
      // Arrange
      const opt = maybe(() => undefined)

      // Assert
      expectTypeOf<(...args: Array<never>) => Maybe<undefined>>(opt)

      const res = opt()
      expectTypeOf<Maybe<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      // Arrange
      const opt = maybe((a) => a)

      // Assert
      expectTypeOf<(...args: Array<unknown>) => Maybe<unknown>>(opt)

      const res = opt(1)
      expectTypeOf<Maybe<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      // Arrange
      const opt = maybe((a: number) => a)

      // Assert
      expectTypeOf<(...args: Array<number>) => Maybe<number>>(opt)

      const res = opt(1)
      expectTypeOf<Maybe<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      // Arrange
      const opt = maybe((a: number, b: string) => a + b)

      // Assert
      expectTypeOf<(...args: [number, string]) => Maybe<number | string>>(opt)

      const res = opt(1, 'a')
      expectTypeOf<Maybe<number | string>>(res)
    })

    it('should make result maybe', () => {
      // Arrange
      const opt = maybe(() => 1)

      // Act
      const result = opt()

      // Assert
      expect(result).toEqual(1)
    })

    it('should not change undefined result', () => {
      // Arrange
      const opt = maybe(() => undefined)

      // Act
      const result = opt()

      // Assert
      expect(result).toEqual(undefined)
    })

    it('should not change input', () => {
      // Arrange
      const opt = maybe((a) => a)

      // Act
      const result = opt(1)

      // Assert
      expect(result).toEqual(1)
    })

    it('should not change inputs', () => {
      // Arrange
      const opt = maybe((a: number, b: number) => a + b)

      // Act
      const result = opt(1, 1)

      // Assert
      expect(result).toEqual(2)
    })
  })
})
