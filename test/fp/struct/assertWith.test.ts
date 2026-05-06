import { describe, expect, expectTypeOf, it } from 'vitest'
import * as z from 'zod'
import { assertWith } from '../../../src/oop/struct/assertWith.js'

describe('oop/struct/assertWith.ts', () => {
  describe('assertWith()', () => {
    it('should return assertion function type when creating assertion', () => {
    // Arrange
      const numberSchema = z.number()

      // Act
      const numberAssertion = assertWith(numberSchema)

      // Assert
      expectTypeOf<(input: unknown) => void>(numberAssertion)
    })

    it('should return void type when calling assertion', () => {
    // Arrange
      const numberSchema = z.number()
      const input = 1
      const numberAssertion = assertWith(numberSchema)

      // Act
      const result = numberAssertion(input)

      // Assert
      expectTypeOf<void>(result)
    })

    it('should throw when input does not match schema', () => {
    // Arrange
      const numberSchema = z.number()
      const input = {}
      const numberAssertion = assertWith(numberSchema)

      // Act & Assert
      expect(() => numberAssertion(input)).toThrow()
    })

    it('should not throw when input matches schema', () => {
    // Arrange
      const numberSchema = z.number()
      const input = 1
      const numberAssertion = assertWith(numberSchema)

      // Act & Assert
      expect(() => numberAssertion(input)).not.toThrow()
    })
  })
})
