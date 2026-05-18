import { describe, expect, expectTypeOf, it } from 'vitest'
import { curry } from '../../../src/fp/functions/curry.js'

describe('fp/functions/curry.ts', () => {
  describe('curry()', () => {
    it('should curry a function with multiple arguments', () => {
      // Arrange
      const add = (a: number, b: number, c: number) => a + b + c
      const curriedAdd = curry(add)

      // Act
      const result = curriedAdd(1)(2)(3)

      // Assert
      expect(result).toEqual(6)
    })

    it('should allow partial application', () => {
      // Arrange
      const add = (a: number, b: number, c: number) => a + b + c
      const curriedAdd = curry(add)

      // Act
      const addPartial = curriedAdd(1)(2)
      const result = addPartial(3)

      // Assert
      expect(result).toEqual(6)
    })

    it('should only work when called one by one', () => {
      // Arrange
      const add = (a: number, b: number) => a + b
      const curriedAdd = curry(add)

      // Act
      const result = curriedAdd(1)(2)

      // Assert
      expect(result).toEqual(3)
    })

    it('should have correct types for curried function', () => {
      // Arrange
      const add = (a: number, b: number, c: number) => a + b + c
      const curriedAdd = curry(add)

      // Act & Assert
      expectTypeOf<(arg0: number) => (arg1: number) => (arg2: number) => number>(curriedAdd)
    })

    it('should work with a function taking no arguments', () => {
      // Arrange
      const noArgs = () => 42
      const curriedNoArgs = curry(noArgs)

      // Act
      const result = curriedNoArgs()

      // Assert
      expect(result).toEqual(42)
    })
  })
})