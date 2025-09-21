import { expectTypeOf } from 'vitest'
import * as z from 'zod'

// test
import { assertWith } from '../../../src/oop/struct/assertWith.js'


describe('oop/struct/assertWith.ts', () => {
  describe('assertWith()', () => {
    it('should be typed correctly', () => {
      const numberSchema = z.number()
      const numberAssertion = assertWith(numberSchema)

      expectTypeOf<(input: unknown) => void>(numberAssertion)
    })
    it('should be typed correctly when calling assertion', () => {
      const numberSchema = z.number()
      const input = 1

      const numberAssertion = assertWith(numberSchema)

      expectTypeOf<void>(numberAssertion(input))
    })

    it('should return false if input is not a number', () => {
      const numberSchema = z.number()
      const input = {}

      const numberAssertion = assertWith(numberSchema)

      expect(() => numberAssertion(input)).toThrow()
    })

    it('should return true if input is a number', () => {
      const numberSchema = z.number()
      const input = 1

      const numberAssertion = assertWith(numberSchema)

      expect(() => numberAssertion(input)).not.toThrow()
    })
  })
})
