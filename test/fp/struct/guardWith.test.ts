import { describe, expect, it, expectTypeOf } from 'vitest'
import * as z from 'zod'

// test
import { guardWith } from '../../../src/oop/struct/guardWith.js'

describe('oop/struct/guardWith.ts', () => {
  describe('guardWith()', () => {
    it('should be typed correctly', () => {
      // Arrange
      const numberSchema = z.number()
      const numberGuard = guardWith(numberSchema)

      // Assert
      expectTypeOf<(input: unknown) => boolean>(numberGuard)
    })

    it('should be typed correctly when calling guard', () => {
      // Arrange
      const numberSchema = z.number()
      const input = {}
      const numberGuard = guardWith(numberSchema)

      // Assert
      expectTypeOf<boolean>(numberGuard(input))
    })

    it('should return false if input is not a number', () => {
      // Arrange
      const numberSchema = z.number()
      const input = {}
      const numberGuard = guardWith(numberSchema)

      // Act
      const result = numberGuard(input)

      // Assert
      expect(result).toEqual(false)
    })

    it('should return true if input is a number', () => {
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
