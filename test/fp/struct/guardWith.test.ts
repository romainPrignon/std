import { describe, expect, expectTypeOf, it } from 'vitest'
import * as z from 'zod'
import { guardWith } from '../../../src/oop/struct/guardWith.js'

describe('oop/struct/guardWith.ts', () => {
  describe('guardWith()', () => {
    it('should return guard function type when creating guard', () => {
    // Arrange
      const numberSchema = z.number()

      // Act
      const numberGuard = guardWith(numberSchema)

      // Assert
      expectTypeOf<(input: unknown) => boolean>(numberGuard)
    })

    it('should return boolean type when calling guard', () => {
    // Arrange
      const numberSchema = z.number()
      const input = {}
      const numberGuard = guardWith(numberSchema)

      // Act
      const result = numberGuard(input)

      // Assert
      expectTypeOf<boolean>(result)
    })

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
