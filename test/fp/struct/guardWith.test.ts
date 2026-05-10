import { expectTypeOf } from 'vitest'
import * as z from 'zod'

// test
import { guardWith } from '../../../src/oop/struct/guardWith.js'


describe('oop/struct/guardWith.ts', () => {
  describe('guardWith()', () => {
    describe('type checking', () => {
      it('should return function with correct signature when schema is provided', () => {
        // Arrange
        const numberSchema = z.number()

        // Act
        const numberGuard = guardWith(numberSchema)

        // Assert
        expectTypeOf<(input: unknown) => boolean>(numberGuard)
      })

      it('should return boolean when guard function is called', () => {
        // Arrange
        const numberSchema = z.number()
        const input = {}
        const numberGuard = guardWith(numberSchema)

        // Act & Assert
        expectTypeOf<boolean>(numberGuard(input))
      })
    })

    describe('validation', () => {
      it('should return false when input does not match schema', () => {
        // Arrange
        const numberSchema = z.number()
        const input = {}
        const numberGuard = guardWith(numberSchema)

        // Act
        const result = numberGuard(input)

        // Assert
        expect(result).toEqual(false)
      })

      it('should return true when input matches schema', () => {
        // Arrange
        const numberSchema = z.number()
        const input = 1
        const numberGuard = guardWith(numberSchema)

        // Act
        const result = numberGuard(input)

        // Assert
        expect(result).toEqual(true)
      })
    })
  })
})
