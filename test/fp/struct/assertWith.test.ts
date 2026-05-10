import { expectTypeOf } from 'vitest'
import * as z from 'zod'

// test
import { assertWith } from '../../../src/oop/struct/assertWith.js'


describe('oop/struct/assertWith.ts', () => {
  describe('assertWith()', () => {
    describe('type checking', () => {
      it('should return function with correct signature when schema is provided', () => {
        // Arrange
        const numberSchema = z.number()

        // Act
        const numberAssertion = assertWith(numberSchema)

        // Assert
        expectTypeOf<(input: unknown) => void>(numberAssertion)
      })

      it('should return void when assertion function is called', () => {
        // Arrange
        const numberSchema = z.number()
        const input = 1
        const numberAssertion = assertWith(numberSchema)

        // Act & Assert
        expectTypeOf<void>(numberAssertion(input))
      })
    })

    describe('validation', () => {
      it('should throw error when input does not match schema', () => {
        // Arrange
        const numberSchema = z.number()
        const input = {}
        const numberAssertion = assertWith(numberSchema)

        // Act & Assert
        expect(() => numberAssertion(input)).toThrow()
      })

      it('should not throw error when input matches schema', () => {
        // Arrange
        const numberSchema = z.number()
        const input = 1
        const numberAssertion = assertWith(numberSchema)

        // Act & Assert
        expect(() => numberAssertion(input)).not.toThrow()
      })
    })
  })
})
