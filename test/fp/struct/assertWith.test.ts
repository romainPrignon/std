import { describe, expect, it, expectTypeOf } from 'vitest'
import * as z from 'zod'

// test
import { assertWith } from '../../../src/oop/struct/assertWith.js'

describe('oop/struct/assertWith.ts', () => {
  describe('assertWith()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const numberSchema = z.number()
      const numberAssertion = assertWith(numberSchema)

      // Assert
      expectTypeOf<(input: unknown) => void>(numberAssertion)
    })

    it('should be typed correctly when calling assertion', () => {
      // Arrange
      const numberSchema = z.number()
      const input = 1
      const numberAssertion = assertWith(numberSchema)

      // Assert
      expectTypeOf<void>(numberAssertion(input))
    })

    it('should throw if input is not a number', () => {
      // Arrange
      const numberSchema = z.number()
      const input = {}
      const numberAssertion = assertWith(numberSchema)

      // Act & Assert
      expect(() => numberAssertion(input)).toThrow()
    })

    it('should not throw if input is a number', () => {
      // Arrange
      const numberSchema = z.number()
      const input = 1
      const numberAssertion = assertWith(numberSchema)

      // Act & Assert
      expect(() => numberAssertion(input)).not.toThrow()
    })
  })
})
